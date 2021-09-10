import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyEntity } from './company.entity';
@Entity({ name: 'delivery_poscodes' })
export class DeliveryPoscodesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  number: number;
  @Column({ length: 45 })
  long: string;
  @Column({ length: 45 })
  lat: string;
  @ManyToOne(
    () => CompanyEntity,
    (companyEntity) => companyEntity.deliveryPoscodes,
    {
      onDelete: 'CASCADE',
    },
  )
  company: CompanyEntity;
}
