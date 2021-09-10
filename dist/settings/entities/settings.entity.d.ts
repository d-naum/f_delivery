import { CompanyEntity } from 'src/company/entities/company.entity';
export declare class SettingsEntity {
    id: number;
    readonly brandName: string;
    readonly email: string;
    readonly contact: string;
    readonly address: string;
    readonly paypalClientId: string;
    company: CompanyEntity;
}
