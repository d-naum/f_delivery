import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateCouponDTO } from './dto/create-coupon.dto';
import { CouponEntity } from './entities/coupon.entity';
import { Coupon } from './interfaces/coupon.interface';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async createCoupon(coupon: CreateCouponDTO): Promise<Coupon> {
    const results = await this.clientRepository.findOne(coupon.clientId, {
      relations: ['clientAddress'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any client');
    } else {
      const saveCoupon = await this.couponRepository.save({
        number: coupon.number,
        status: coupon.status,
        client: results,
      });
      return { ...saveCoupon, client: results };
    }
  }

  async getCoupons(): Promise<Coupon[]> {
    return await this.couponRepository
      .createQueryBuilder('coupon')
      .leftJoinAndSelect('coupon.client', 'client')
      .leftJoinAndSelect('client.clientAddress', 'clientAddress')
      .getMany();
  }

  async getClientCoupon(id: number): Promise<Coupon[]> {
    const results = await this.couponRepository
      .createQueryBuilder('coupon')
      .where('coupon.client = :id', { id: id })
      .getMany();
    if (!results) {
      throw new NotFoundException('No Coupon found');
    }
    return results;
  }
}
