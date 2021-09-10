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
exports.ClientEntity = void 0;
const order_entity_1 = require("../../order/entities/order.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const coupon_entity_1 = require("../../coupon/entities/coupon.entity");
const typeorm_1 = require("typeorm");
const client_address_entity_1 = require("./client-address.entity");
let ClientEntity = class ClientEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "note", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientEntity.prototype, "preferredDeliveryTime", void 0);
__decorate([
    typeorm_1.OneToOne(() => client_address_entity_1.ClientAddressEntity, (addressEntity) => addressEntity.client, { cascade: true, onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", client_address_entity_1.ClientAddressEntity)
], ClientEntity.prototype, "clientAddress", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.UserEntity)
], ClientEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_entity_1.OrderEntity, (orderEntity) => orderEntity.company, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], ClientEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.OneToMany(() => coupon_entity_1.CouponEntity, (couponEntity) => couponEntity.client, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", coupon_entity_1.CouponEntity)
], ClientEntity.prototype, "coupon", void 0);
__decorate([
    typeorm_1.ManyToOne(() => payment_entity_1.PaymentEntity, (paymentEntity) => paymentEntity.client),
    __metadata("design:type", Array)
], ClientEntity.prototype, "payment", void 0);
ClientEntity = __decorate([
    typeorm_1.Entity({ name: 'client' })
], ClientEntity);
exports.ClientEntity = ClientEntity;
//# sourceMappingURL=client.entity.js.map