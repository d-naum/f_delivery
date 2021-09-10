import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import { PaymentStatusEntity } from './entities/payment-status.entity';
import { PaymentEntity } from './entities/payment.entity';
import { Payment } from './interfaces/payment.interface';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
    @InjectRepository(PaymentStatusEntity)
    private readonly paymentStatusRepository: Repository<PaymentStatusEntity>,
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) { }

  async CreatePayment(payment: CreatePaymentDTO): Promise<Payment> {

    try {

      const resultClient = await this.clientRepository.findOne(payment.clientId, {
        relations: ['clientAddress'],
      });
      const resultOrder = await this.orderRepository.findOne(payment.orderId);
      const resultCompany = await this.companyRepository.findOne(
        payment.companyId,
      );
      const resultCoupon = await this.couponRepository.find({ id: payment.couponId })
      console.log(resultCoupon)
      if (!resultClient) {
        throw new NotFoundException('Could not find any client');
      } else if (!resultCoupon) {
        throw new NotFoundException('Could not find any coupon');
      } else {
        const resultPaymentStatus = await this.paymentStatusRepository.save({
          name: payment.paymentStatus,
        });
        const resultPayment = await this.paymentRepository.save({
          name: payment.name,
          amount: payment.amount,
          paymentStatus: resultPaymentStatus,
          client: resultClient,
          links: payment.links,
          coupon: resultCoupon.length > 0 ? resultCoupon[0] : null,
          order: resultOrder,
          company: resultCompany,
        });
        return {
          ...resultPayment,
          client: resultClient,
          coupon: resultCoupon.length > 0 ? resultCoupon[0] : null,
          paymentStatus: resultPaymentStatus,
          order: resultOrder,
          company: resultCompany,
        };
      }
    }
    catch (error) {
      return error
    }
  }

  async getPayments(): Promise<Payment[]> {
    return await this.paymentRepository
      .createQueryBuilder('payment')
      .leftJoinAndSelect('payment.client', 'client')
      .leftJoinAndSelect('payment.order', 'order')
      .leftJoinAndSelect('payment.company', 'company')
      .leftJoinAndSelect('client.clientAddress', 'clienAddress')
      .leftJoinAndSelect('payment.coupon', 'coupon')
      .leftJoinAndSelect('payment.paymentStatus', 'paymentStatus')
      .getMany();
  }

  async getPayment(id: number): Promise<Payment> {
    return await this.paymentRepository
      .createQueryBuilder('payment')
      .leftJoinAndSelect('payment.client', 'client')
      .leftJoinAndSelect('payment.order', 'order')
      .leftJoinAndSelect('payment.company', 'company')
      .leftJoinAndSelect('client.clientAddress', 'clienAddress')
      .leftJoinAndSelect('payment.coupon', 'coupon')
      .leftJoinAndSelect('payment.paymentStatus', 'paymentStatus')
      .where('payment.id = :id', { id: id })
      .getOne();
    // return await this.paymentRepository.findOne(id, {
    //   relations: ['client', 'paymentStatus', 'coupon', 'order', 'links', 'company'],
    // })
  }

  async getClientPayment(id: number): Promise<Payment[]> {
    const results = await this.paymentRepository
      .createQueryBuilder('payment')
      .where('payment.client = :id', { id: id })
      .getMany();
    if (!results) {
      throw new NotFoundException('Could not find any payments for the client');
    }
    return results;
  }

  async getCompanyPayment(id: number): Promise<Payment[]> {
    const results = await this.paymentRepository
      .createQueryBuilder('payment')
      .where('payment.company = :id', { id: id })
      .getMany();
    if (!results) {
      throw new NotFoundException(
        'Could not find any payments for the company',
      );
    }
    return results;
  }
}
