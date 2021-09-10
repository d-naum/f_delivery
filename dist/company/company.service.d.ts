import { PassHashService } from 'src/client/auth/pass-hash/pass-hash.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO, UpdateStatusDTO } from './dto/update-company.dto';
import { CompanyEntity } from './entities/company.entity';
import { DeliveryPoscodesEntity } from './entities/delivery-poscodes.entity';
import { DeliveryTimesEntity } from './entities/delivery-times.entity';
import { Company, DeliveryPoscodes } from './interfaces/company.interface';
export declare class CompanyService {
    private readonly companyRepository;
    private readonly userRepository;
    private readonly poscodesRepository;
    private readonly deliveryTimesRepository;
    private passHashService;
    constructor(companyRepository: Repository<CompanyEntity>, userRepository: Repository<UserEntity>, poscodesRepository: Repository<DeliveryPoscodesEntity>, deliveryTimesRepository: Repository<DeliveryTimesEntity>, passHashService: PassHashService);
    createCompany(company: CreateCompanyDTO): Promise<Company>;
    getCompanies(): Promise<Company[]>;
    getCompany(id: number): Promise<Company>;
    getCompanyStatus(id: number): Promise<any>;
    getCompanyPoscodes(id: number): Promise<DeliveryPoscodes[]>;
    updateCompany(id: number, recordToUpdate: UpdateCompanyDTO): Promise<UpdateResult>;
    updateCompanyStatus(id: number, recordToUpdate: UpdateStatusDTO): Promise<UpdateResult>;
    deleteCompany(id: number): Promise<DeleteResult>;
}
