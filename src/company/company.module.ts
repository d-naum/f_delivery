import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassHashService } from 'src/client/auth/pass-hash/pass-hash.service';
import { ClientEntity } from 'src/client/entities/client.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyEntity } from './entities/company.entity';
import { DeliveryPoscodesEntity } from './entities/delivery-poscodes.entity';
import { DeliveryTimesEntity } from './entities/delivery-times.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompanyEntity,
      UserEntity,
      DeliveryPoscodesEntity,
      DeliveryTimesEntity,
      ClientEntity,
    ]),
    UserModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService, PassHashService],
})
export class CompanyModule {}
