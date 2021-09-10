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
exports.CouponEntity = void 0;
const client_entity_1 = require("../../client/entities/client.entity");
const typeorm_1 = require("typeorm");
let CouponEntity = class CouponEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CouponEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], CouponEntity.prototype, "number", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], CouponEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => client_entity_1.ClientEntity, (client) => client.coupon, { cascade: true, onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", client_entity_1.ClientEntity)
], CouponEntity.prototype, "client", void 0);
CouponEntity = __decorate([
    typeorm_1.Entity({ name: 'coupon' })
], CouponEntity);
exports.CouponEntity = CouponEntity;
//# sourceMappingURL=coupon.entity.js.map