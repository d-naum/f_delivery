import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { PassHashService } from 'src/client/auth/pass-hash/pass-hash.service';
import { Repository } from 'typeorm';
import { CreateUsertDTO } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { User, UserLogin } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private passHashService: PassHashService,
    private jwtService: JwtService,
    @InjectRepository(CompanyEntity)
    private readonly CompanyRepository: Repository<CompanyEntity>,
  ) {}

  async login(user: CreateUsertDTO): Promise<UserLogin> {
    const checkUser = await this.userRepository.findOne({ email: user.email });
    if (!checkUser) {
      throw new UnauthorizedException(
        `Could not find any user with this email${user.email}`,
      );
    }
    const matchPassword = await this.passHashService.comparePassword(
      user.password,
      checkUser.password,
    );

    

    if (matchPassword) {
      const checkCompany = await this.CompanyRepository.findOne({
        user: checkUser
      });
      const token = await this.jwtService.signAsync({
        email: checkUser.email,
        id: checkUser.id,
        hasRole: checkUser.hasRole,
        companyId: checkUser.hasRole === 'company' ? checkCompany.id : 0
      });
      return { token };
    } else {
      throw new UnauthorizedException(`Password doesn't match`);
    }
  }

  async creatAdmin(user: CreateUsertDTO): Promise<User> {
    const userExist = await this.userRepository.findOne({ email: user.email });
    if (userExist) {
      throw new UnauthorizedException(
        `Admin already created with this ${user.email}`,
      );
    } else {
      const encryptedPassword = await this.passHashService.hashPassword(
        user.password,
      );

      const createAdmin = await this.userRepository.save({
        email: user.email,
        password: encryptedPassword,
        hasRole: 'admin',
      });
      delete createAdmin.password;
      return createAdmin;
    }
  }
}
