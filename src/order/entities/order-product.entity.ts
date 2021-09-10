import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from './order.entity';

@Entity({ name: 'order_products' })
export class OrderProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  quantity: number;
  @ManyToOne(() => OrderEntity, (orderEntity) => orderEntity.orderProducts, {
    onDelete: 'CASCADE',
  })
  order: OrderEntity;
  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.orderProducts,
    {
      onDelete: 'CASCADE',
    },
  )
  product: ProductEntity;
}
