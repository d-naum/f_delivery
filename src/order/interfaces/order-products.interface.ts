import { Product } from 'src/product/interfaces/product.interface';
import { Order } from './order.interface';

export interface OrderProducts {
  id: number;
  order: Order;
  product: Product;
  quantity: number;
}
