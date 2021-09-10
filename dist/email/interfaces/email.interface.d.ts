import { Company } from 'src/company/interfaces/company.interface';
export interface Email {
    readonly id: number;
    readonly from: string;
    readonly to: string;
    readonly message: string;
    readonly company: Company;
}
