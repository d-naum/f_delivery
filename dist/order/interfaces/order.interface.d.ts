import { Client } from 'src/client/interfaces/client.interface';
import { Company } from 'src/company/interfaces/company.interface';
export interface Order {
    id: number;
    deliveryDate: string;
    status: OrderStatus;
    client: Client;
    complete: boolean;
    couponId: number;
    amount: number;
    company: Company;
}
export interface OrderStatus {
    id: number;
    name: string;
}
