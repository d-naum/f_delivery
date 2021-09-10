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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const company_entity_1 = require("../company/entities/company.entity");
const coupon_entity_1 = require("../coupon/entities/coupon.entity");
const typeorm_2 = require("typeorm");
const order_product_entity_1 = require("./entities/order-product.entity");
const order_entity_1 = require("./entities/order.entity");
const status_entity_1 = require("./entities/status.entity");
let OrderService = class OrderService {
    constructor(orderRepository, clientRepository, couponRepository, orderStatusRepository, companyRepository, orderProductsEntity) {
        this.orderRepository = orderRepository;
        this.clientRepository = clientRepository;
        this.couponRepository = couponRepository;
        this.orderStatusRepository = orderStatusRepository;
        this.companyRepository = companyRepository;
        this.orderProductsEntity = orderProductsEntity;
    }
    async createOrder(clientId, order) {
        const resultClient = await this.clientRepository.findOne(order.clientId, {
            relations: ['clientAddress'],
        });
        const resultCompany = await this.companyRepository.findOne(order.companyId);
        if (!resultClient && !resultCompany) {
            throw new common_1.NotFoundException('Could not find any Client or company');
        }
        else {
            let orderProducts = [];
            if (Array.isArray(order.orderProducts) && order.orderProducts.length) {
                orderProducts = await this.orderProductsEntity.save(order.orderProducts);
            }
            const orderStatus = await this.orderStatusRepository.save({
                name: order.statusName,
            });
            const newOrder = new order_entity_1.OrderEntity();
            newOrder.client = resultClient;
            newOrder.company = resultCompany;
            newOrder.orderProducts = orderProducts;
            newOrder.status = orderStatus;
            newOrder.couponId = order.couponId;
            newOrder.deliveryDate = order.deliveryDate;
            newOrder.complete = order.complete;
            newOrder.amount = order.amount;
            const resultOrder = await this.orderRepository.save(newOrder);
            return Object.assign(Object.assign({}, resultOrder), { client: resultClient, company: resultCompany });
        }
    }
    async getOrders() {
        return await this.orderRepository.find({
            relations: [
                'status',
                'client',
                'orderProducts',
                'orderProducts.product',
                'company',
            ],
        });
    }
    async getOrder(id) {
        const results = await this.orderRepository.findOne(id, {
            relations: [
                'status',
                'client',
                'orderProducts',
                'orderProducts.product',
                'company',
            ],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        return results;
    }
    async getOrderStatus(id) {
        const results = await this.orderRepository.findOne(id, {
            relations: ['status'],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any order');
        }
        return results.status;
    }
    async updateOrder(id, recordToUpdate) {
        return await this.orderRepository.update(id, recordToUpdate);
    }
    async updateOrderStatus(id, recordToUpdate) {
        try {
            const resultOrder = await this.orderRepository.findOne(id, {
                relations: ['status'],
            });
            const statusId = resultOrder.status;
            return await this.orderStatusRepository.update(statusId, recordToUpdate);
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteOrder(id) {
        return await this.orderRepository.delete(id);
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_entity_1.OrderEntity)),
    __param(1, typeorm_1.InjectRepository(client_entity_1.ClientEntity)),
    __param(2, typeorm_1.InjectRepository(coupon_entity_1.CouponEntity)),
    __param(3, typeorm_1.InjectRepository(status_entity_1.OrderStatusEntity)),
    __param(4, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __param(5, typeorm_1.InjectRepository(order_product_entity_1.OrderProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map