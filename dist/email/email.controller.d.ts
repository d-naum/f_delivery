import { CreateEmailDTO } from './dto/create-email.dto';
import { EmailService } from './email.service';
import { Email } from './interfaces/email.interface';
export declare class EmailController {
    private emailService;
    constructor(emailService: EmailService);
    create(email: CreateEmailDTO): Promise<Email>;
}
