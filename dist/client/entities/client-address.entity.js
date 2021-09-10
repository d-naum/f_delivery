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
exports.ClientAddressEntity = void 0;
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client.entity");
let ClientAddressEntity = class ClientAddressEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ClientAddressEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientAddressEntity.prototype, "street", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], ClientAddressEntity.prototype, "streetNo", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientAddressEntity.prototype, "city", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientAddressEntity.prototype, "postCode", void 0);
__decorate([
    typeorm_1.Column({ length: 45 }),
    __metadata("design:type", String)
], ClientAddressEntity.prototype, "floor", void 0);
__decorate([
    typeorm_1.OneToOne(() => client_entity_1.ClientEntity, client => client.clientAddress, { onDelete: 'CASCADE' }),
    __metadata("design:type", client_entity_1.ClientEntity)
], ClientAddressEntity.prototype, "client", void 0);
ClientAddressEntity = __decorate([
    typeorm_1.Entity({ name: 'client_address' })
], ClientAddressEntity);
exports.ClientAddressEntity = ClientAddressEntity;
//# sourceMappingURL=client-address.entity.js.map