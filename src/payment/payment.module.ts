import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { UserModule } from 'src/user/user.module';
import { LinksEntity } from './entities/links.entity';
import { PaymentStatusEntity } from './entities/payment-status.entity';
import { PaymentEntity } from './entities/payment.entity';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PaymentEntity,
      PaymentStatusEntity,
      LinksEntity,
      CouponEntity,
      ClientEntity,
      CompanyEntity,
      OrderEntity,
    ]),
    UserModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
