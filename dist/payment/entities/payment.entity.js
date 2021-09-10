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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentEntity = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const company_entity_1 = require("../../company/entities/company.entity");
const coupon_entity_1 = require("../../coupon/entities/coupon.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
const links_entity_1 = require("./links.entity");
const payment_status_entity_1 = require("./payment-status.entity");
let PaymentEntity = class PaymentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('float', { default: null }),
    __metadata("design:type", Number)
], PaymentEntity.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], PaymentEntity.prototype, "dateTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PaymentEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToOne(() => payment_status_entity_1.PaymentStatusEntity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", payment_status_entity_1.PaymentStatusEntity)
], PaymentEntity.prototype, "paymentStatus", void 0);
__decorate([
    typeorm_1.OneToOne(() => coupon_entity_1.CouponEntity, coupon => coupon.id, { nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", coupon_entity_1.CouponEntity)
], PaymentEntity.prototype, "coupon", void 0);
__decorate([
    typeorm_1.OneToOne(() => order_entity_1.OrderEntity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", order_entity_1.OrderEntity)
], PaymentEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.OneToMany(() => links_entity_1.LinksEntity, (linksEntity) => linksEntity.payment, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], PaymentEntity.prototype, "links", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_entity_1.ClientEntity, (clientEntity) => clientEntity.payment, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", client_entity_1.ClientEntity)
], PaymentEntity.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity, (companyEntity) => companyEntity.payment, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], PaymentEntity.prototype, "company", void 0);
PaymentEntity = __decorate([
    typeorm_1.Entity({ name: 'payment' })
], PaymentEntity);
exports.PaymentEntity = PaymentEntity;
//# sourceMappingURL=payment.entity.js.map