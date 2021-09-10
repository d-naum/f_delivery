import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { SettingsEntity } from './entities/settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, SettingsEntity]), UserModule],
  providers: [SettingsService],
  controllers: [SettingsController]
})
export class SettingsModule { }
