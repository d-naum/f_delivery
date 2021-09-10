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
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("../company/entities/company.entity");
const typeorm_2 = require("typeorm");
const email_entity_1 = require("./entities/email.entity");
let EmailService = class EmailService {
    constructor(emailRepository, companyRepository) {
        this.emailRepository = emailRepository;
        this.companyRepository = companyRepository;
    }
    async createEmail(email) {
        const resultCompany = await this.companyRepository.findOne(email.companyId, {
            relations: ['deliveryTimes', 'deliveryPoscodes'],
        });
        if (!resultCompany) {
            throw new common_1.NotFoundException('Could not find any Company');
        }
        else {
            const resultEmail = await this.emailRepository.save({
                from: email.from,
                to: email.to,
                message: email.message,
                company: resultCompany,
            });
            return Object.assign(Object.assign({}, resultEmail), { company: resultCompany });
        }
    }
};
EmailService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(email_entity_1.EmailEntity)),
    __param(1, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map