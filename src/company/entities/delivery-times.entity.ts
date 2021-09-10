import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyEntity } from './company.entity';
@Entity({ name: 'delivery_times' })
export class DeliveryTimesEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45 })
  day: string;
  @Column({ length: 45 })
  startTime: string;
  @Column({ length: 45 })
  endTime: string;
  @ManyToOne(
    () => CompanyEntity,
    (companyEntity) => companyEntity.deliveryTimes,
    {
      onDelete: 'CASCADE',
    },
  )
  company: CompanyEntity;
}
