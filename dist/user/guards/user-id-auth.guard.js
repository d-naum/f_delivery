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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../../client/entities/client.entity");
const company_entity_1 = require("../../company/entities/company.entity");
const typeorm_2 = require("typeorm");
let UserIdAuthGuard = class UserIdAuthGuard {
    constructor(ClientRepository, CompanyRepository) {
        this.ClientRepository = ClientRepository;
        this.CompanyRepository = CompanyRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const params = request.params;
        const user = request.user.user;
        console.log(user);
        switch (user.hasRole) {
            case 'client':
                const checkClient = await this.ClientRepository.findOne({
                    user: user.id,
                });
                if (checkClient.id === Number(params.id)) {
                    return true;
                }
                else {
                    return false;
                }
            case 'company':
                const checkCompany = await this.CompanyRepository.findOne({
                    user: user.id,
                });
                if (checkCompany.id === Number(params.id)) {
                    return true;
                }
                else {
                    return false;
                }
            case 'admin':
                return true;
        }
        console.log('param:', params.id);
        return false;
    }
};
UserIdAuthGuard = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(client_entity_1.ClientEntity)),
    __param(1, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserIdAuthGuard);
exports.UserIdAuthGuard = UserIdAuthGuard;
//# sourceMappingURL=user-id-auth.guard.js.map