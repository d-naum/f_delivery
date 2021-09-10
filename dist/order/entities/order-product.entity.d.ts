import { ProductEntity } from 'src/product/entities/product.entity';
import { OrderEntity } from './order.entity';
export declare class OrderProductsEntity {
    id: number;
    quantity: number;
    order: OrderEntity;
    product: ProductEntity;
}
