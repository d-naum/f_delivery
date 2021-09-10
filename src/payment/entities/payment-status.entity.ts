import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'payment_status' })
export class PaymentStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  name: string;
}
