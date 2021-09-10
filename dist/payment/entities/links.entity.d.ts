import { PaymentEntity } from './payment.entity';
export declare class LinksEntity {
    id: number;
    href: string;
    rel: string;
    method: string;
    payment: PaymentEntity;
}
