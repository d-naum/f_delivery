import { OrderEntity } from 'src/order/entities/order.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { PaymentEntity } from 'src/payment/entities/payment.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { ClientAddressEntity } from './client-address.entity';
export declare class ClientEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    note: string;
    preferredDeliveryTime: string;
    clientAddress: ClientAddressEntity;
    user: UserEntity;
    order: OrderEntity[];
    coupon: CouponEntity;
    payment: PaymentEntity[];
}
