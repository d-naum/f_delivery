"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const company_entity_1 = require("../company/entities/company.entity");
const coupon_entity_1 = require("../coupon/entities/coupon.entity");
const order_entity_1 = require("../order/entities/order.entity");
const typeorm_2 = require("typeorm");
const payment_status_entity_1 = require("./entities/payment-status.entity");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentService = class PaymentService {
    constructor(couponRepository, clientRepository, paymentStatusRepository, paymentRepository, orderRepository, companyRepository) {
        this.couponRepository = couponRepository;
        this.clientRepository = clientRepository;
        this.paymentStatusRepository = paymentStatusRepository;
        this.paymentRepository = paymentRepository;
        this.orderRepository = orderRepository;
        this.companyRepository = companyRepository;
    }
    async CreatePayment(payment) {
        try {
            const resultClient = await this.clientRepository.findOne(payment.clientId, {
                relations: ['clientAddress'],
            });
            const resultOrder = await this.orderRepository.findOne(payment.orderId);
            const resultCompany = await this.companyRepository.findOne(payment.companyId);
            const resultCoupon = await this.couponRepository.find({ id: payment.couponId });
            console.log(resultCoupon);
            if (!resultClient) {
                throw new common_1.NotFoundException('Could not find any client');
            }
            else if (!resultCoupon) {
                throw new common_1.NotFoundException('Could not find any coupon');
            }
            else {
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
                return Object.assign(Object.assign({}, resultPayment), { client: resultClient, coupon: resultCoupon.length > 0 ? resultCoupon[0] : null, paymentStatus: resultPaymentStatus, order: resultOrder, company: resultCompany });
            }
        }
        catch (error) {
            return error;
        }
    }
    async getPayments() {
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
    async getPayment(id) {
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
    }
    async getClientPayment(id) {
        const results = await this.paymentRepository
            .createQueryBuilder('payment')
            .where('payment.client = :id', { id: id })
            .getMany();
        if (!results) {
            throw new common_1.NotFoundException('Could not find any payments for the client');
        }
        return results;
    }
    async getCompanyPayment(id) {
        const results = await this.paymentRepository
            .createQueryBuilder('payment')
            .where('payment.company = :id', { id: id })
            .getMany();
        if (!results) {
            throw new common_1.NotFoundException('Could not find any payments for the company');
        }
        return results;
    }
};
PaymentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(coupon_entity_1.CouponEntity)),
    __param(1, typeorm_1.InjectRepository(client_entity_1.ClientEntity)),
    __param(2, typeorm_1.InjectRepository(payment_status_entity_1.PaymentStatusEntity)),
    __param(3, typeorm_1.InjectRepository(payment_entity_1.PaymentEntity)),
    __param(4, typeorm_1.InjectRepository(order_entity_1.OrderEntity)),
    __param(5, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map