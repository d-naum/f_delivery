import { CompanyEntity } from 'src/company/entities/company.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity({ name: 'settings' })
export class SettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  readonly brandName: string;

  @Column({ length: 50 })
  readonly email: string;

  @Column({ length: 30 })
  readonly contact: string;

  @Column({ length: 100 })
  readonly address: string;

  @Column({ length: 255 })
  readonly paypalClientId: string;

  @OneToOne(() => CompanyEntity)
  @JoinColumn()
  company: CompanyEntity;
}
