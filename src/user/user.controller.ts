import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { hasRoles } from './decorator/roles.decorator';

import { CreateUsertDTO } from './dto/user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';

import { User, UserLogin } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  async login(@Body() user: CreateUsertDTO): Promise<UserLogin> {
    return await this.userService.login(user);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('admin')
  async createAdmin(@Body() user: CreateUsertDTO): Promise<User> {
    return await this.userService.creatAdmin(user);
  }
}
