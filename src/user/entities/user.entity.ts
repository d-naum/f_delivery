import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  email: string;
  @Column({ length: 100 })
  password: string;
  @Column({ length: 100 })
  hasRole: string;
}
