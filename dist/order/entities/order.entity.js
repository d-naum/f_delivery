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
exports.OrderEntity = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const company_entity_1 = require("../../company/entities/company.entity");
const typeorm_1 = require("typeorm");
const order_product_entity_1 = require("./order-product.entity");
const status_entity_1 = require("./status.entity");
let OrderEntity = class OrderEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], OrderEntity.prototype, "deliveryDate", void 0);
__decorate([
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], OrderEntity.prototype, "complete", void 0);
__decorate([
    typeorm_1.Column('int', { default: null }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "couponId", void 0);
__decorate([
    typeorm_1.Column('int', { default: 0 }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "amount", void 0);
__decorate([
    typeorm_1.OneToOne(() => status_entity_1.OrderStatusEntity),
    typeorm_1.JoinColumn(),
    __metadata("design:type", status_entity_1.OrderStatusEntity)
], OrderEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_entity_1.ClientEntity, (clientEntity) => clientEntity.order, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", client_entity_1.ClientEntity)
], OrderEntity.prototype, "client", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity, (companyEntity) => companyEntity.order, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], OrderEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_product_entity_1.OrderProductsEntity, (orderProductsEntity) => orderProductsEntity.order),
    __metadata("design:type", Array)
], OrderEntity.prototype, "orderProducts", void 0);
OrderEntity = __decorate([
    typeorm_1.Entity({ name: 'order' })
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map