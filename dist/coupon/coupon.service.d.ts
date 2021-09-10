import { ClientEntity } from 'src/client/entities/client.entity';
import { Repository } from 'typeorm';
import { CreateCouponDTO } from './dto/create-coupon.dto';
import { CouponEntity } from './entities/coupon.entity';
import { Coupon } from './interfaces/coupon.interface';
export declare class CouponService {
    private readonly couponRepository;
    private readonly clientRepository;
    constructor(couponRepository: Repository<CouponEntity>, clientRepository: Repository<ClientEntity>);
    createCoupon(coupon: CreateCouponDTO): Promise<Coupon>;
    getCoupons(): Promise<Coupon[]>;
    getClientCoupon(id: number): Promise<Coupon[]>;
}
