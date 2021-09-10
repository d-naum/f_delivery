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
exports.DeliveryPoscodesEntity = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
let DeliveryPoscodesEntity = class DeliveryPoscodesEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DeliveryPoscodesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], DeliveryPoscodesEntity.prototype, "number", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], DeliveryPoscodesEntity.prototype, "long", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], DeliveryPoscodesEntity.prototype, "lat", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity, (companyEntity) => companyEntity.deliveryPoscodes, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], DeliveryPoscodesEntity.prototype, "company", void 0);
DeliveryPoscodesEntity = __decorate([
    typeorm_1.Entity({ name: 'delivery_poscodes' })
], DeliveryPoscodesEntity);
exports.DeliveryPoscodesEntity = DeliveryPoscodesEntity;
//# sourceMappingURL=delivery-poscodes.entity.js.map