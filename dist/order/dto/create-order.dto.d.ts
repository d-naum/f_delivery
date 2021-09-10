import { OrderProductQuantityDTO } from './order-product-quantity.dto';
export declare class CreateOrderDTO {
    readonly orderProducts: OrderProductQuantityDTO[];
    readonly deliveryDate: string;
    readonly complete: boolean;
    readonly couponId: number;
    readonly amount: number;
    readonly companyId: number;
    readonly clientId: number;
    readonly statusName: string;
}
