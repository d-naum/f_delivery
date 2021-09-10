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
exports.CompanyEntity = void 0;
const email_entity_1 = require("../../email/entities/email.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const delivery_poscodes_entity_1 = require("./delivery-poscodes.entity");
const delivery_times_entity_1 = require("./delivery-times.entity");
let CompanyEntity = class CompanyEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "imprint", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "minDeliveryAmount", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToMany(() => delivery_times_entity_1.DeliveryTimesEntity, (deliveryTimesEntity) => deliveryTimesEntity.company, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "deliveryTimes", void 0);
__decorate([
    typeorm_1.OneToMany(() => delivery_poscodes_entity_1.DeliveryPoscodesEntity, (deliveryPoscodes) => deliveryPoscodes.company, {
        cascade: ['insert', 'update'],
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "deliveryPoscodes", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.UserEntity)
], CompanyEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => email_entity_1.EmailEntity, (emailEntity) => emailEntity.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.OneToMany(() => product_entity_1.ProductEntity, (productEntity) => productEntity.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "product", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_entity_1.OrderEntity, (orderEntity) => orderEntity.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "order", void 0);
__decorate([
    typeorm_1.ManyToOne(() => payment_entity_1.PaymentEntity, (paymentEntity) => paymentEntity.company),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "payment", void 0);
CompanyEntity = __decorate([
    typeorm_1.Entity({ name: 'company' })
], CompanyEntity);
exports.CompanyEntity = CompanyEntity;
//# sourceMappingURL=company.entity.js.map