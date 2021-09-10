import { CreateSettingsDTO } from 'src/settings/dto/create-settings.dto';
import { SettingsService } from 'src/settings/settings.service';
import { Settings } from 'src/settings/interfaces/settings.interface';
export declare class SettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    create(settings: CreateSettingsDTO): Promise<Settings>;
    getSettings(param: any): Promise<Settings>;
    updateSettings(param: any, settings: CreateSettingsDTO): Promise<Settings>;
}
