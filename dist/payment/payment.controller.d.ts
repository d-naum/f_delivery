import { CreatePaymentDTO } from './dto/create-payment.dto';
import { Payment } from './interfaces/payment.interface';
import { PaymentService } from './payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    create(payment: CreatePaymentDTO): Promise<Payment>;
    getPayments(): Promise<Payment[]>;
    getPayment(id: any): Promise<Payment>;
    getClientPayments(id: any): Promise<Payment[]>;
    getCompanyPayments(id: any): Promise<Payment[]>;
}
