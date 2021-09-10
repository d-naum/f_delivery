import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { CouponModule } from './coupon/coupon.module';
import { PaymentModule } from './payment/payment.module';
import { CompanyModule } from './company/company.module';
import { EmailModule } from './email/email.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';

import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/config';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    ClientModule,
    ProductModule,
    CouponModule,
    PaymentModule,
    CompanyModule,
    EmailModule,
    OrderModule,
    UserModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    console.log('connection status', connection.isConnected);
  }
}
