"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const pass_hash_service_1 = require("../client/auth/pass-hash/pass-hash.service");
const user_entity_1 = require("./entities/user.entity");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const roles_guard_1 = require("./guards/roles.guard");
const jwt_stretegy_1 = require("./stretegies/jwt.stretegy");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const client_entity_1 = require("../client/entities/client.entity");
const company_entity_1 = require("../company/entities/company.entity");
const user_id_auth_guard_1 = require("./guards/user-id-auth.guard");
const config_1 = require("@nestjs/config");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secretOrPrivateKey: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: configService.get('EXPIRES_IN'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, client_entity_1.ClientEntity, company_entity_1.CompanyEntity]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            pass_hash_service_1.PassHashService,
            jwt_stretegy_1.JwtStrategy,
            jwt_auth_guard_1.JwtAuthGuard,
            roles_guard_1.RolesGuard,
            user_id_auth_guard_1.UserIdAuthGuard,
        ],
        exports: [jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map