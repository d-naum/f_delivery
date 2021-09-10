import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';
export declare class UserIdAuthGuard implements CanActivate {
    private readonly ClientRepository;
    private readonly CompanyRepository;
    constructor(ClientRepository: Repository<ClientEntity>, CompanyRepository: Repository<CompanyEntity>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
