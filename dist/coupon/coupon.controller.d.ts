import { CouponService } from './coupon.service';
import { CreateCouponDTO } from './dto/create-coupon.dto';
import { Coupon } from './interfaces/coupon.interface';
export declare class CouponController {
    private couponService;
    constructor(couponService: CouponService);
    create(coupon: CreateCouponDTO): Promise<Coupon>;
    getCoupon(): Promise<Coupon[]>;
    getClientCoupon(id: any): Promise<Coupon[]>;
}
