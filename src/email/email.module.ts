import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { UserModule } from 'src/user/user.module';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailEntity } from './entities/email.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmailEntity, CompanyEntity]), UserModule],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
