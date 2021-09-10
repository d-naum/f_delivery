import { CompanyEntity } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
import { CreateSettingsDTO } from 'src/settings/dto/create-settings.dto';
import { SettingsEntity } from 'src/settings/entities/settings.entity';
import { Settings } from 'src/settings/interfaces/settings.interface';
export declare class SettingsService {
    private readonly settingRepository;
    private readonly companyRepository;
    constructor(settingRepository: Repository<SettingsEntity>, companyRepository: Repository<CompanyEntity>);
    createSetting(setting: CreateSettingsDTO): Promise<Settings>;
    getSettings(id: number): Promise<Settings>;
    updateSettings(id: number, settingRecord: CreateSettingsDTO): Promise<Settings>;
}
