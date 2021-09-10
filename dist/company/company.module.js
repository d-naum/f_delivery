"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pass_hash_service_1 = require("../client/auth/pass-hash/pass-hash.service");
const client_entity_1 = require("../client/entities/client.entity");
const user_entity_1 = require("../user/entities/user.entity");
const user_module_1 = require("../user/user.module");
const company_controller_1 = require("./company.controller");
const company_service_1 = require("./company.service");
const company_entity_1 = require("./entities/company.entity");
const delivery_poscodes_entity_1 = require("./entities/delivery-poscodes.entity");
const delivery_times_entity_1 = require("./entities/delivery-times.entity");
let CompanyModule = class CompanyModule {
};
CompanyModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                company_entity_1.CompanyEntity,
                user_entity_1.UserEntity,
                delivery_poscodes_entity_1.DeliveryPoscodesEntity,
                delivery_times_entity_1.DeliveryTimesEntity,
                client_entity_1.ClientEntity,
            ]),
            user_module_1.UserModule,
        ],
        controllers: [company_controller_1.CompanyController],
        providers: [company_service_1.CompanyService, pass_hash_service_1.PassHashService],
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map