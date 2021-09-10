import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity({ name: 'client_address' })
export class ClientAddressEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45 })
  street: string;
  @Column('int')
  streetNo: number;
  @Column({ length: 45 })
  city: string;
  @Column({ length: 45 })
  postCode: string;
  @Column({ length: 45 })
  floor: string;

  @OneToOne(() => ClientEntity, client => client.clientAddress, { onDelete: 'CASCADE' })
  client!: ClientEntity
}
