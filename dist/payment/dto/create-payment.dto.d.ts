export declare class CreatePaymentDTO {
    readonly amount: number;
    readonly name: string;
    readonly clientId: number;
    readonly companyId: number;
    readonly links: CreateLinksDTO[];
    readonly couponId: number;
    readonly orderId: number;
    readonly paymentStatus: string;
}
export declare class CreateLinksDTO {
    readonly href: string;
    readonly rel: string;
    readonly method: string;
}
