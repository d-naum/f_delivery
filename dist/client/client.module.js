"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_address_entity_1 = require("./entities/client-address.entity");
const client_controller_1 = require("./client.controller");
const client_entity_1 = require("./entities/client.entity");
const client_service_1 = require("./client.service");
const user_entity_1 = require("../user/entities/user.entity");
const pass_hash_service_1 = require("./auth/pass-hash/pass-hash.service");
const user_module_1 = require("../user/user.module");
const company_entity_1 = require("../company/entities/company.entity");
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                client_entity_1.ClientEntity,
                client_address_entity_1.ClientAddressEntity,
                user_entity_1.UserEntity,
                company_entity_1.CompanyEntity,
            ]),
            user_module_1.UserModule,
        ],
        controllers: [client_controller_1.ClientController],
        providers: [client_service_1.ClientService, pass_hash_service_1.PassHashService],
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map