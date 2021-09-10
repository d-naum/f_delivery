import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { LinksEntity } from './links.entity';
import { PaymentStatusEntity } from './payment-status.entity';
export declare class PaymentEntity {
    id: number;
    amount: number;
    dateTime: string;
    name: string;
    paymentStatus: PaymentStatusEntity;
    coupon: CouponEntity;
    order: OrderEntity;
    links: LinksEntity[];
    client: ClientEntity;
    company: CompanyEntity;
}
