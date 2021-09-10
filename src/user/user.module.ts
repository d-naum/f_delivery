import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassHashService } from 'src/client/auth/pass-hash/pass-hash.service';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './stretegies/jwt.stretegy';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { UserIdAuthGuard } from './guards/user-id-auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('EXPIRES_IN'),
        },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity, ClientEntity, CompanyEntity]),
  ],

  controllers: [UserController],
  providers: [
    UserService,
    PassHashService,
    JwtStrategy,
    JwtAuthGuard,
    RolesGuard,
    UserIdAuthGuard,
  ],
  exports: [JwtAuthGuard, RolesGuard, UserIdAuthGuard],
})
export class UserModule {}
