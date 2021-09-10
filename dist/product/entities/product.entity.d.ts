import { CompanyEntity } from 'src/company/entities/company.entity';
import { OrderProductsEntity } from 'src/order/entities/order-product.entity';
import { AddonsEntity } from './addons.entity';
import { CategoryEntity } from './category.entity';
export declare class ProductEntity {
    id: number;
    title: string;
    info: string;
    price: number;
    outOfStock: boolean;
    category: CategoryEntity;
    addons: AddonsEntity[];
    company: CompanyEntity;
    orderProducts: OrderProductsEntity[];
}
