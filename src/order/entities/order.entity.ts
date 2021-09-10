import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderProductsEntity } from './order-product.entity';
import { OrderStatusEntity } from './status.entity';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  deliveryDate: string;
  @Column('boolean')
  complete: boolean;
  @Column('int', { default: null })
  couponId: number;
  @Column('int', { default: 0 })
  amount: number;
  @OneToOne(() => OrderStatusEntity)
  @JoinColumn()
  status: OrderStatusEntity;

  @ManyToOne(() => ClientEntity, (clientEntity) => clientEntity.order, {
    onDelete: 'CASCADE',
  })
  client: ClientEntity;

  @ManyToOne(() => CompanyEntity, (companyEntity) => companyEntity.order, {
    onDelete: 'CASCADE',
  })
  company: CompanyEntity;
  @OneToMany(
    () => OrderProductsEntity,
    (orderProductsEntity) => orderProductsEntity.order,
  )
  orderProducts: OrderProductsEntity[];
}
