import { DeleteResult, UpdateResult } from 'typeorm';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './dto/create-company.dto';
import { UpdateStatusDTO } from './dto/update-company.dto';
import { Company, DeliveryPoscodes } from './interfaces/company.interface';
export declare class CompanyController {
    private companyService;
    constructor(companyService: CompanyService);
    createCompany(company: CreateCompanyDTO): Promise<Company>;
    getCompanies(): Promise<Company[]>;
    getCompanyStatus(id: any): Promise<any>;
    getCompanyPostCode(id: any): Promise<DeliveryPoscodes[]>;
    getCompany(id: any): Promise<Company>;
    updateProductStatus(id: any, recordToUpdate: UpdateStatusDTO): Promise<UpdateResult>;
    updateCompany(id: any, recordToUpdate: CreateCompanyDTO): Promise<UpdateResult>;
    deleteProduct(params: any): Promise<DeleteResult>;
}
