import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { UserModule } from 'src/user/user.module';
import { OrderProductsEntity } from './entities/order-product.entity';
import { OrderEntity } from './entities/order.entity';
import { OrderStatusEntity } from './entities/status.entity';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      ClientEntity,
      CouponEntity,
      OrderStatusEntity,
      CompanyEntity,
      OrderProductsEntity,
    ]),
    UserModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
