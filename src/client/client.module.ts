import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientAddressEntity } from './entities/client-address.entity';
import { ClientController } from './client.controller';
import { ClientEntity } from './entities/client.entity';
import { ClientService } from './client.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { PassHashService } from './auth/pass-hash/pass-hash.service';
import { UserModule } from 'src/user/user.module';
import { CompanyEntity } from 'src/company/entities/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClientEntity,
      ClientAddressEntity,
      UserEntity,
      CompanyEntity,
    ]),
    UserModule,
  ],
  controllers: [ClientController],
  providers: [ClientService, PassHashService],
})
export class ClientModule {}
