import { CompanyEntity } from 'src/company/entities/company.entity';
import { OrderProductsEntity } from 'src/order/entities/order-product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddonsEntity } from './addons.entity';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  title: string;
  @Column({ length: 500 })
  info: string;
  @Column('float')
  price: number;
  @Column('boolean', {
    default: false,
  })
  outOfStock: boolean;

  @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.product, {
    onDelete: 'CASCADE',
  })
  category: CategoryEntity;

  @ManyToMany(() => AddonsEntity)
  @JoinTable({ name: 'product_addons' })
  addons: AddonsEntity[];

  @ManyToOne(() => CompanyEntity, (companyEntity) => companyEntity.product, {
    onDelete: 'CASCADE',
  })
  company: CompanyEntity;

  @OneToMany(
    () => OrderProductsEntity,
    (orderProductsEntity) => orderProductsEntity.product,
  )
  orderProducts: OrderProductsEntity[];
}
