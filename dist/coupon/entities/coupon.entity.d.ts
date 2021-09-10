import { ClientEntity } from 'src/client/entities/client.entity';
export declare class CouponEntity {
    id: number;
    number: number;
    status: string;
    client: ClientEntity;
}
