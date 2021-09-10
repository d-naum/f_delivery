export declare class CreateProductDTO {
    readonly title: string;
    readonly info: string;
    readonly price: number;
    readonly categoryId: number;
    readonly companyId: number;
    readonly outOfStock: boolean;
    readonly addons: CreateAddonsDTO[];
}
export declare class CreateCategoryDTO {
    readonly name: string;
}
export declare class CreateAddonsDTO {
    readonly name: string;
    readonly price: number;
}
export declare class OrderProductDTO {
    readonly id: number;
    readonly title: string;
    readonly info: string;
    readonly price: number;
    readonly categoryId: number;
    readonly companyId: number;
    readonly addons: CreateAddonsDTO[];
}
