import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { UserModule } from 'src/user/user.module';
import { AddonsEntity } from './entities/addons.entity';
import { CategoryEntity } from './entities/category.entity';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity,
      AddonsEntity,
      ProductEntity,
      CompanyEntity,
      ClientEntity,
    ]),
    UserModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
