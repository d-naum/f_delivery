import { CompanyEntity } from 'src/company/entities/company.entity';
export declare class EmailEntity {
    id: number;
    readonly from: string;
    readonly to: string;
    readonly message: string;
    company: CompanyEntity;
}
