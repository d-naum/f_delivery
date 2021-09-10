import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { UserIdAuthGuard } from 'src/user/guards/user-id-auth.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateCompanyDTO, UpdateStatusDTO } from './dto/update-company.dto';
import { Company, DeliveryPoscodes } from './interfaces/company.interface';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  @Post()
  async createCompany(@Body() company: CreateCompanyDTO): Promise<Company> {
    return await this.companyService.createCompany(company);
  }

  @Get()
  async getCompanies(): Promise<Company[]> {
    return await this.companyService.getCompanies();
  }

  @Get(':id/status')
  async getCompanyStatus(@Param('id') id): Promise<any> {
    return await this.companyService.getCompanyStatus(+id);
  }

  @Get(':id/postcodes')
  async getCompanyPostCode(@Param('id') id): Promise<DeliveryPoscodes[]> {
    return await this.companyService.getCompanyPoscodes(+id);
  }

  @Get(':id')
  async getCompany(@Param('id') id): Promise<Company> {
    return await this.companyService.getCompany(+id);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put(':id/status')
  async updateProductStatus(
    @Param('id') id,
    @Body() recordToUpdate: UpdateStatusDTO,
  ): Promise<UpdateResult> {
    return await this.companyService.updateCompanyStatus(+id, recordToUpdate);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put(':id')
  async updateCompany(
    @Param('id') id,
    @Body() recordToUpdate: CreateCompanyDTO,
  ): Promise<UpdateResult> {
    return await this.companyService.updateCompany(+id, recordToUpdate);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async deleteProduct(@Param() params): Promise<DeleteResult> {
    return await this.companyService.deleteCompany(+params.id);
  }
}
