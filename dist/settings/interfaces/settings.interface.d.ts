import { Company } from 'src/company/interfaces/company.interface';
export interface Settings {
    readonly id: number;
    readonly brandName: string;
    readonly email: string;
    readonly contact: string;
    readonly address: string;
    readonly paypalClientId: string;
    readonly company: Company;
}
