import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentEntity } from './payment.entity';
@Entity({ name: 'links' })
export class LinksEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  href: string;
  @Column({ length: 200 })
  rel: string;
  @Column({ length: 200 })
  method: string;
  @ManyToOne(() => PaymentEntity, (paymentEntity) => paymentEntity.links, {
    onDelete: 'CASCADE',
  })
  payment: PaymentEntity;
}
