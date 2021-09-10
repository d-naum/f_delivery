import { UpdateProductDTO } from 'src/product/dto/update-product.dto';
export declare class UpdateOrderDTO {
    readonly product: UpdateProductDTO[];
    readonly deliveryDate: string;
    readonly status: UpdateOrderStatusDTO;
    readonly complete: boolean;
    readonly couponId: number;
    readonly amount: number;
}
export declare class UpdateOrderStatusDTO {
    readonly name: string;
}
