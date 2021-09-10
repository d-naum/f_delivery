import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import { PaymentStatusEntity } from './entities/payment-status.entity';
import { PaymentEntity } from './entities/payment.entity';
import { Payment } from './interfaces/payment.interface';
export declare class PaymentService {
    private readonly couponRepository;
    private readonly clientRepository;
    private readonly paymentStatusRepository;
    private readonly paymentRepository;
    private readonly orderRepository;
    private readonly companyRepository;
    constructor(couponRepository: Repository<CouponEntity>, clientRepository: Repository<ClientEntity>, paymentStatusRepository: Repository<PaymentStatusEntity>, paymentRepository: Repository<PaymentEntity>, orderRepository: Repository<OrderEntity>, companyRepository: Repository<CompanyEntity>);
    CreatePayment(payment: CreatePaymentDTO): Promise<Payment>;
    getPayments(): Promise<Payment[]>;
    getPayment(id: number): Promise<Payment>;
    getClientPayment(id: number): Promise<Payment[]>;
    getCompanyPayment(id: number): Promise<Payment[]>;
}
