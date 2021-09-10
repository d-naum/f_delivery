import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { UserModule } from 'src/user/user.module';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponEntity } from './entities/coupon.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CouponEntity, ClientEntity, CompanyEntity]),
    UserModule,
  ],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
