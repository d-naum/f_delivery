import { CompanyEntity } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateEmailDTO } from './dto/create-email.dto';
import { EmailEntity } from './entities/email.entity';
import { Email } from './interfaces/email.interface';
export declare class EmailService {
    private readonly emailRepository;
    private readonly companyRepository;
    constructor(emailRepository: Repository<EmailEntity>, companyRepository: Repository<CompanyEntity>);
    createEmail(email: CreateEmailDTO): Promise<Email>;
}
