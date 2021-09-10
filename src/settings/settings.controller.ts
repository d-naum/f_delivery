import { Body, Param, Controller, Post, UseGuards, Put, Get } from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { CreateSettingsDTO } from 'src/settings/dto/create-settings.dto';
import { SettingsService } from 'src/settings/settings.service';
import { Settings } from 'src/settings/interfaces/settings.interface';

@Controller('settings')
export class SettingsController {
    constructor(private settingsService: SettingsService) { }

    @hasRoles(['admin', 'company'])
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Post()
    async create(@Body() settings: CreateSettingsDTO): Promise<Settings> {
        return await this.settingsService.createSetting(settings);
    }

    @hasRoles(['admin', 'company'])
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':id')
    async getSettings(@Param() param): Promise<Settings> {
        return await this.settingsService.getSettings(+param.id);
    }

    @hasRoles(['admin', 'company'])
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Put(':id')
    async updateSettings(@Param() param, @Body() settings: CreateSettingsDTO): Promise<Settings> {
        return await this.settingsService.updateSettings(+param.id, settings);
    }
}
