import { EmailEntity } from 'src/email/entities/email.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { PaymentEntity } from 'src/payment/entities/payment.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DeliveryPoscodesEntity } from './delivery-poscodes.entity';
import { DeliveryTimesEntity } from './delivery-times.entity';
@Entity({ name: 'company' })
export class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45 })
  name: string;
  @Column({ length: 45 })
  imprint: string;
  @Column('int')
  minDeliveryAmount: number;
  @Column({ length: 45 })
  status: string;
  @OneToMany(
    () => DeliveryTimesEntity,
    (deliveryTimesEntity) => deliveryTimesEntity.company,
    {
      cascade: ['insert', 'update'],
      onDelete: 'CASCADE',
    },
  )
  deliveryTimes: DeliveryTimesEntity[];
  @OneToMany(
    () => DeliveryPoscodesEntity,
    (deliveryPoscodes) => deliveryPoscodes.company,
    {
      cascade: ['insert', 'update'],
      onDelete: 'CASCADE',
    },
  )
  deliveryPoscodes: DeliveryPoscodesEntity[];
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
  //Email
  @OneToMany(() => EmailEntity, (emailEntity) => emailEntity.company)
  email: EmailEntity[];
  //product
  @OneToMany(() => ProductEntity, (productEntity) => productEntity.company)
  product: ProductEntity[];
  //order
  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.company)
  order: OrderEntity[];
  //payment
  @ManyToOne(() => PaymentEntity, (paymentEntity) => paymentEntity.company)
  payment: PaymentEntity[];
}
