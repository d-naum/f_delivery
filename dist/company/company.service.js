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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pass_hash_service_1 = require("../client/auth/pass-hash/pass-hash.service");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("./entities/company.entity");
const delivery_poscodes_entity_1 = require("./entities/delivery-poscodes.entity");
const delivery_times_entity_1 = require("./entities/delivery-times.entity");
let CompanyService = class CompanyService {
    constructor(companyRepository, userRepository, poscodesRepository, deliveryTimesRepository, passHashService) {
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
        this.poscodesRepository = poscodesRepository;
        this.deliveryTimesRepository = deliveryTimesRepository;
        this.passHashService = passHashService;
    }
    async createCompany(company) {
        const checkUser = await this.userRepository.findOne({
            email: company.email,
        });
        if (checkUser) {
            throw new common_1.UnauthorizedException(`User already created with this ${company.email}`);
        }
        else {
            const encryptedPassword = await this.passHashService.hashPassword(company.password);
            const user = await this.userRepository.save({
                email: company.email,
                password: encryptedPassword,
                hasRole: 'company',
            });
            let deliveryPoscodes = [];
            if (Array.isArray(company.deliveryPoscodes) &&
                company.deliveryPoscodes.length) {
                deliveryPoscodes = await this.poscodesRepository.save(company.deliveryPoscodes);
            }
            let deliveryTimes = [];
            if (Array.isArray(company.deliveryTimes) &&
                company.deliveryTimes.length) {
                deliveryTimes = await this.deliveryTimesRepository.save(company.deliveryTimes);
            }
            console.log(deliveryPoscodes);
            const newCompany = new company_entity_1.CompanyEntity();
            newCompany.deliveryPoscodes = deliveryPoscodes;
            newCompany.deliveryTimes = deliveryTimes;
            newCompany.imprint = company.imprint;
            newCompany.minDeliveryAmount = company.minDeliveryAmount;
            newCompany.name = company.name;
            newCompany.status = company.status;
            newCompany.user = user;
            await this.companyRepository.save(newCompany);
            delete newCompany.user;
            return Object.assign({}, newCompany);
        }
    }
    async getCompanies() {
        return await this.companyRepository.find({
            relations: ['payment', 'deliveryTimes', 'deliveryPoscodes'],
        });
    }
    async getCompany(id) {
        return await this.companyRepository.findOne(id, {
            relations: ['payment', 'deliveryTimes', 'deliveryPoscodes'],
        });
    }
    async getCompanyStatus(id) {
        const resultCompany = await this.companyRepository.findOne(id);
        return { status: resultCompany.status };
    }
    async getCompanyPoscodes(id) {
        const resultCompany = await this.companyRepository.findOne(id, {
            relations: ['deliveryPoscodes'],
        });
        return resultCompany.deliveryPoscodes;
    }
    async updateCompany(id, recordToUpdate) {
        return await this.companyRepository.update(id, recordToUpdate);
    }
    async updateCompanyStatus(id, recordToUpdate) {
        return await this.companyRepository.update(id, {
            status: recordToUpdate.status,
        });
    }
    async deleteCompany(id) {
        return await this.companyRepository.delete(id);
    }
};
CompanyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __param(2, typeorm_1.InjectRepository(delivery_poscodes_entity_1.DeliveryPoscodesEntity)),
    __param(3, typeorm_1.InjectRepository(delivery_times_entity_1.DeliveryTimesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        pass_hash_service_1.PassHashService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map