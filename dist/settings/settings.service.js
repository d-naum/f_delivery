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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("../company/entities/company.entity");
const typeorm_2 = require("typeorm");
const create_settings_dto_1 = require("./dto/create-settings.dto");
const settings_entity_1 = require("./entities/settings.entity");
const settings_interface_1 = require("./interfaces/settings.interface");
let SettingsService = class SettingsService {
    constructor(settingRepository, companyRepository) {
        this.settingRepository = settingRepository;
        this.companyRepository = companyRepository;
    }
    async createSetting(setting) {
        const resultCompany = await this.companyRepository.findOne(setting.companyId, {
            relations: ['deliveryTimes', 'deliveryPoscodes'],
        });
        if (!resultCompany) {
            throw new common_1.NotFoundException('Could not find any Company');
        }
        else {
            const resultSetting = await this.settingRepository.save({
                brandName: setting.brandName,
                contact: setting.contact,
                email: setting.email,
                address: setting.address,
                paypalClientId: setting.paypalClientId,
                company: resultCompany,
            });
            return Object.assign(Object.assign({}, resultSetting), { company: resultCompany });
        }
    }
    async getSettings(id) {
        return await this.settingRepository
            .createQueryBuilder('settings')
            .where({ company: id })
            .getOne();
    }
    async updateSettings(id, settingRecord) {
        const setting = await this.settingRepository
            .createQueryBuilder('settings')
            .where({ company: id })
            .getOne();
        if (!setting) {
            throw new common_1.NotFoundException('Could not find any Category');
        }
        await this.settingRepository.merge(setting, settingRecord);
        return await this.settingRepository.save(setting);
    }
};
SettingsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(settings_entity_1.SettingsEntity)),
    __param(1, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map