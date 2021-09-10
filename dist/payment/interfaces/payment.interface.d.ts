import { Client } from 'src/client/interfaces/client.interface';
import { Company } from 'src/company/interfaces/company.interface';
import { Coupon } from 'src/coupon/interfaces/coupon.interface';
import { Order } from 'src/order/interfaces/order.interface';
export interface Payment {
    id: number;
    amount: number;
    dateTime: string;
    name: string;
    client: Client;
    order: Order;
    company: Company;
    paymentStatus: PaymentStatus;
    links: Links[];
    coupon: Coupon;
}
export interface PaymentStatus {
    id: number;
    name: string;
}
export interface Links {
    href: string;
    rel: string;
    method: string;
}
