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
exports.LinksEntity = void 0;
const typeorm_1 = require("typeorm");
const payment_entity_1 = require("./payment.entity");
let LinksEntity = class LinksEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LinksEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], LinksEntity.prototype, "href", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], LinksEntity.prototype, "rel", void 0);
__decorate([
    typeorm_1.Column({ length: 200 }),
    __metadata("design:type", String)
], LinksEntity.prototype, "method", void 0);
__decorate([
    typeorm_1.ManyToOne(() => payment_entity_1.PaymentEntity, (paymentEntity) => paymentEntity.links, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", payment_entity_1.PaymentEntity)
], LinksEntity.prototype, "payment", void 0);
LinksEntity = __decorate([
    typeorm_1.Entity({ name: 'links' })
], LinksEntity);
exports.LinksEntity = LinksEntity;
//# sourceMappingURL=links.entity.js.map