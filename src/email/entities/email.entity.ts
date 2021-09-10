import { CompanyEntity } from 'src/company/entities/company.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'email' })
export class EmailEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  readonly from: string;
  @Column({ length: 200 })
  readonly to: string;
  @Column({ length: 3000 })
  readonly message: string;
  @ManyToOne(() => CompanyEntity, (companyEntity) => companyEntity.email, {
    onDelete: 'CASCADE',
  })
  company: CompanyEntity;
}
