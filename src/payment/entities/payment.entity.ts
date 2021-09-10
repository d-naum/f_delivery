import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  ManyToMany
} from 'typeorm';
import { LinksEntity } from './links.entity';
import { PaymentStatusEntity } from './payment-status.entity';

@Entity({ name: 'payment' })
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('float', { default: null })
  amount: number;
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  dateTime: string;
  @Column()
  name: string;
  @OneToOne(() => PaymentStatusEntity)
  @JoinColumn()
  paymentStatus: PaymentStatusEntity;

  @OneToOne(() => CouponEntity, coupon => coupon.id, { nullable: true })
  @JoinColumn()
  coupon: CouponEntity;

  @OneToOne(() => OrderEntity)
  @JoinColumn()
  order: OrderEntity;
  @OneToMany(() => LinksEntity, (linksEntity) => linksEntity.payment, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  links: LinksEntity[];
  @ManyToOne(() => ClientEntity, (clientEntity) => clientEntity.payment, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  client: ClientEntity;
  @ManyToOne(() => CompanyEntity, (companyEntity) => companyEntity.payment, {
    onDelete: 'CASCADE',
  })
  company: CompanyEntity;
}
