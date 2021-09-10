import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'rating' })
export class RatingEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  number: number;
}
