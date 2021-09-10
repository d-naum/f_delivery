import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserIdAuthGuard implements CanActivate {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly ClientRepository: Repository<ClientEntity>,
    @InjectRepository(CompanyEntity)
    private readonly CompanyRepository: Repository<CompanyEntity>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const params = request.params;
    const user = request.user.user;
    console.log(user);

    switch (user.hasRole) {
      case 'client':
        const checkClient = await this.ClientRepository.findOne({
          user: user.id,
        });
        if (checkClient.id === Number(params.id)) {
          return true;
        } else {
          return false;
        }
      case 'company':
        const checkCompany = await this.CompanyRepository.findOne({
          user: user.id,
        });
        if (checkCompany.id === Number(params.id)) {
          return true;
        } else {
          return false;
        }
      case 'admin':
        return true;
    }
    // if (user.hasRole === 'admin') {
    //   return true;
    // }
    // if (user.hasRole === 'client') {
    //   const checkClient = await this.ClientRepository.findOne({
    //     user: user.id,
    //   });
    //   if (checkClient.id === Number(params.id)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    // if (user.hasRole === 'company') {
    //   const checkCompany = await this.CompanyRepository.findOne({
    //     user: user.id,
    //   });
    //   if (checkCompany.id === Number(params.id)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    console.log('param:', params.id);
    return false;
  }
}
