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
exports.ProductEntity = void 0;
const company_entity_1 = require("../../company/entities/company.entity");
const order_product_entity_1 = require("../../order/entities/order-product.entity");
const typeorm_1 = require("typeorm");
const addons_entity_1 = require("./addons.entity");
const category_entity_1 = require("./category.entity");
let ProductEntity = class ProductEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], ProductEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], ProductEntity.prototype, "info", void 0);
__decorate([
    typeorm_1.Column('float'),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        default: false,
    }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "outOfStock", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.CategoryEntity, (categoryEntity) => categoryEntity.product, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ProductEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToMany(() => addons_entity_1.AddonsEntity),
    typeorm_1.JoinTable({ name: 'product_addons' }),
    __metadata("design:type", Array)
], ProductEntity.prototype, "addons", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity, (companyEntity) => companyEntity.product, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], ProductEntity.prototype, "company", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_product_entity_1.OrderProductsEntity, (orderProductsEntity) => orderProductsEntity.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "orderProducts", void 0);
ProductEntity = __decorate([
    typeorm_1.Entity({ name: 'product' })
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map