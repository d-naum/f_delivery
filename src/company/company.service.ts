import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PassHashService } from 'src/client/auth/pass-hash/pass-hash.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO, UpdateStatusDTO } from './dto/update-company.dto';
import { CompanyEntity } from './entities/company.entity';
import { DeliveryPoscodesEntity } from './entities/delivery-poscodes.entity';
import { DeliveryTimesEntity } from './entities/delivery-times.entity';
import { Company, DeliveryPoscodes } from './interfaces/company.interface';
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(DeliveryPoscodesEntity)
    private readonly poscodesRepository: Repository<DeliveryPoscodesEntity>,
    @InjectRepository(DeliveryTimesEntity)
    private readonly deliveryTimesRepository: Repository<DeliveryTimesEntity>,
    private passHashService: PassHashService,
  ) { }

  async createCompany(company: CreateCompanyDTO): Promise<Company> {
    const checkUser = await this.userRepository.findOne({
      email: company.email,
    });
    if (checkUser) {
      throw new UnauthorizedException(
        `User already created with this ${company.email}`,
      );
    } else {
      const encryptedPassword = await this.passHashService.hashPassword(
        company.password,
      );
      const user = await this.userRepository.save({
        email: company.email,
        password: encryptedPassword,
        hasRole: 'company',
      });
      let deliveryPoscodes = [];
      if (
        Array.isArray(company.deliveryPoscodes) &&
        company.deliveryPoscodes.length
      ) {
        deliveryPoscodes = await this.poscodesRepository.save(
          company.deliveryPoscodes,
        );
      }
      let deliveryTimes = [];
      if (
        Array.isArray(company.deliveryTimes) &&
        company.deliveryTimes.length
      ) {
        deliveryTimes = await this.deliveryTimesRepository.save(
          company.deliveryTimes,
        );
      }
      console.log(deliveryPoscodes);
      const newCompany = new CompanyEntity();
      newCompany.deliveryPoscodes = deliveryPoscodes;
      newCompany.deliveryTimes = deliveryTimes;
      newCompany.imprint = company.imprint;
      newCompany.minDeliveryAmount = company.minDeliveryAmount;
      newCompany.name = company.name;
      newCompany.status = company.status;
      newCompany.user = user;
      await this.companyRepository.save(newCompany);
      delete newCompany.user;
      return { ...newCompany };
    }
  }

  async getCompanies(): Promise<Company[]> {
    return await this.companyRepository.find({
      relations: ['payment', 'deliveryTimes', 'deliveryPoscodes'],
    });
  }

  async getCompany(id: number): Promise<Company> {
    return await this.companyRepository.findOne(id, {
      relations: ['payment', 'deliveryTimes', 'deliveryPoscodes'],
    });
  }

  async getCompanyStatus(id: number): Promise<any> {
    const resultCompany = await this.companyRepository.findOne(id);
    return { status: resultCompany.status };
  }

  async getCompanyPoscodes(id: number): Promise<DeliveryPoscodes[]> {
    const resultCompany = await this.companyRepository.findOne(id, {
      relations: ['deliveryPoscodes'],
    });
    return resultCompany.deliveryPoscodes;
  }

  async updateCompany(
    id: number,
    recordToUpdate: UpdateCompanyDTO,
  ): Promise<UpdateResult> {
    return await this.companyRepository.update(id, recordToUpdate);
  }

  async updateCompanyStatus(
    id: number,
    recordToUpdate: UpdateStatusDTO,
  ): Promise<UpdateResult> {
    return await this.companyRepository.update(id, {
      status: recordToUpdate.status,
    });
  }

  async deleteCompany(id: number): Promise<DeleteResult> {
    return await this.companyRepository.delete(id);
  }
}
