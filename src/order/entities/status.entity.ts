import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'order_status' })
export class OrderStatusEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  name: string;
}
