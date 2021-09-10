import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { CreateEmailDTO } from './dto/create-email.dto';
import { EmailService } from './email.service';
import { Email } from './interfaces/email.interface';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(@Body() email: CreateEmailDTO): Promise<Email> {
    return await this.emailService.createEmail(email);
  }
}
