import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 45 })
  name: string;
  @OneToMany(() => ProductEntity, (productEntity) => productEntity.category, {
    onDelete: 'CASCADE',
  })
  product: ProductEntity;
}
