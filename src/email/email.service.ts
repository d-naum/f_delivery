import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateEmailDTO } from './dto/create-email.dto';
import { EmailEntity } from './entities/email.entity';
import { Email } from './interfaces/email.interface';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(EmailEntity)
    private readonly emailRepository: Repository<EmailEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) {}

  async createEmail(email: CreateEmailDTO): Promise<Email> {
    const resultCompany = await this.companyRepository.findOne(
      email.companyId,
      {
        relations: ['deliveryTimes', 'deliveryPoscodes'],
      },
    );
    if (!resultCompany) {
      throw new NotFoundException('Could not find any Company');
    } else {
      const resultEmail = await this.emailRepository.save({
        from: email.from,
        to: email.to,
        message: email.message,
        company: resultCompany,
      });
      return { ...resultEmail, company: resultCompany };
    }
  }
}
