import { CompanyEntity } from './company.entity';
export declare class DeliveryTimesEntity {
    id: number;
    day: string;
    startTime: string;
    endTime: string;
    company: CompanyEntity;
}
