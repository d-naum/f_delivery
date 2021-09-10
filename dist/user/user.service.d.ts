import { JwtService } from '@nestjs/jwt';
import { PassHashService } from 'src/client/auth/pass-hash/pass-hash.service';
import { Repository } from 'typeorm';
import { CreateUsertDTO } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { User, UserLogin } from './interfaces/user.interface';
export declare class UserService {
    private readonly userRepository;
    private passHashService;
    private jwtService;
    private readonly CompanyRepository;
    constructor(userRepository: Repository<UserEntity>, passHashService: PassHashService, jwtService: JwtService, CompanyRepository: Repository<CompanyEntity>);
    login(user: CreateUsertDTO): Promise<UserLogin>;
    creatAdmin(user: CreateUsertDTO): Promise<User>;
}
