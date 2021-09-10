export declare class CreateCompanyDTO {
    readonly name: string;
    readonly imprint: string;
    readonly deliveryTimes: CreateDeliveryTimesDTO[];
    readonly minDeliveryAmount: number;
    readonly status: string;
    readonly deliveryPoscodes: CreateDeliveryPoscodesDTO[];
    readonly email: string;
    readonly password: string;
}
export declare class CreateDeliveryTimesDTO {
    readonly day: string;
    readonly startTime: string;
    readonly endTime: string;
}
export declare class CreateDeliveryPoscodesDTO {
    readonly number: number;
    readonly long: string;
    readonly lat: string;
}
