import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateSettingsDTO } from 'src/settings/dto/create-settings.dto';
import { SettingsEntity } from 'src/settings/entities/settings.entity';
import { Settings } from 'src/settings/interfaces/settings.interface';

@Injectable()
export class SettingsService {
    constructor(
        @InjectRepository(SettingsEntity)
        private readonly settingRepository: Repository<SettingsEntity>,
        @InjectRepository(CompanyEntity)
        private readonly companyRepository: Repository<CompanyEntity>,
    ) { }

    async createSetting(setting: CreateSettingsDTO): Promise<Settings> {
        const resultCompany = await this.companyRepository.findOne(
            setting.companyId,
            {
                relations: ['deliveryTimes', 'deliveryPoscodes'],
            },
        );
        if (!resultCompany) {
            throw new NotFoundException('Could not find any Company');
        } else {
            const resultSetting = await this.settingRepository.save({
                brandName: setting.brandName,
                contact: setting.contact,
                email: setting.email,
                address: setting.address,
                paypalClientId: setting.paypalClientId,
                company: resultCompany,
            });
            return { ...resultSetting, company: resultCompany };
        }
    }
    async getSettings(id: number): Promise<Settings> {
        return await this.settingRepository
        .createQueryBuilder('settings')
        .where({company:id})
        .getOne();
    }
    async updateSettings(id: number, settingRecord: CreateSettingsDTO): Promise<Settings> {
        const setting = await this.settingRepository
        .createQueryBuilder('settings')
        .where({company:id})
        .getOne();
        if (!setting) {
            throw new NotFoundException('Could not find any Category');
        }
        await this.settingRepository.merge(setting, settingRecord);
        return await this.settingRepository.save(setting);
    }
}
