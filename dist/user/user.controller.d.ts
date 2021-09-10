import { CreateUsertDTO } from './dto/user.dto';
import { User, UserLogin } from './interfaces/user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    login(user: CreateUsertDTO): Promise<UserLogin>;
    createAdmin(user: CreateUsertDTO): Promise<User>;
}
