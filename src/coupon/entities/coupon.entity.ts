import { ClientEntity } from 'src/client/entities/client.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
@Entity({ name: 'coupon' })
export class CouponEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  number: number;
  @Column({ length: 45 })
  status: string;
  @ManyToOne(() => ClientEntity, (client) => client.coupon, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  client: ClientEntity;
}
