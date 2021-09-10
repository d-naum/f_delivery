import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'addons' })
export class AddonsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45 })
  name: string;
  @Column('int')
  price: number;
}
