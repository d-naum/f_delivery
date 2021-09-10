import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { OrderProductsEntity } from './order-product.entity';
import { OrderStatusEntity } from './status.entity';
export declare class OrderEntity {
    id: number;
    deliveryDate: string;
    complete: boolean;
    couponId: number;
    amount: number;
    status: OrderStatusEntity;
    client: ClientEntity;
    company: CompanyEntity;
    orderProducts: OrderProductsEntity[];
}
