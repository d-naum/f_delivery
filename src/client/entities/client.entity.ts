import { OrderEntity } from 'src/order/entities/order.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { PaymentEntity } from 'src/payment/entities/payment.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  ManyToOne
} from 'typeorm';
import { ClientAddressEntity } from './client-address.entity';

@Entity({ name: 'client' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45 })
  firstName: string;
  @Column({ length: 45 })
  lastName: string;
  @Column({ length: 45 })
  email: string;
  @Column({ length: 45 })
  phone: string;
  @Column({ length: 45 })
  company: string;
  @Column({ length: 45 })
  note: string;
  @Column({ length: 45 })
  preferredDeliveryTime: string;
  @OneToOne(() => ClientAddressEntity, (addressEntity) => addressEntity.client, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  clientAddress!: ClientAddressEntity;
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.company, {
    onDelete: 'CASCADE',
  })
  order: OrderEntity[];
  @OneToMany(() => CouponEntity, (couponEntity) => couponEntity.client, {
    onDelete: 'CASCADE',
  })
  coupon: CouponEntity;
  //payment
  @ManyToOne(() => PaymentEntity, (paymentEntity) => paymentEntity.client)
  payment: PaymentEntity[];
}
