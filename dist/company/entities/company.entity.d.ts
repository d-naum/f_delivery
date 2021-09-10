import { EmailEntity } from 'src/email/entities/email.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { PaymentEntity } from 'src/payment/entities/payment.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { DeliveryPoscodesEntity } from './delivery-poscodes.entity';
import { DeliveryTimesEntity } from './delivery-times.entity';
export declare class CompanyEntity {
    id: number;
    name: string;
    imprint: string;
    minDeliveryAmount: number;
    status: string;
    deliveryTimes: DeliveryTimesEntity[];
    deliveryPoscodes: DeliveryPoscodesEntity[];
    user: UserEntity;
    email: EmailEntity[];
    product: ProductEntity[];
    order: OrderEntity[];
    payment: PaymentEntity[];
}
