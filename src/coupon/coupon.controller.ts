import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { UserIdAuthGuard } from 'src/user/guards/user-id-auth.guard';
import { CouponService } from './coupon.service';
import { CreateCouponDTO } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';

@Controller('coupons')
export class CouponController {
  constructor(private couponService: CouponService) {}

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  async create(@Body() coupon: CreateCouponDTO): Promise<Coupon> {
    return await this.couponService.createCoupon(coupon);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async getCoupon(): Promise<Coupon[]> {
    return await this.couponService.getCoupons();
  }

  @hasRoles(['admin', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get(':id') //clientID
  async getClientCoupon(@Param('id') id): Promise<Coupon[]> {
    return await this.couponService.getClientCoupon(+id);
  }
}
