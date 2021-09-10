import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDecimal
} from 'class-validator';
import { OrderProductQuantityDTO } from './order-product-quantity.dto';

export class CreateOrderDTO {
  @IsArray()
  readonly orderProducts: OrderProductQuantityDTO[];
  @IsNotEmpty()
  @IsString()
  readonly deliveryDate: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly complete: boolean;
  @IsOptional()
  @IsInt()
  readonly couponId: number;
  @IsInt()
  readonly amount: number;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
  @IsNotEmpty()
  @IsInt()
  readonly clientId: number;
  @IsNotEmpty()
  @IsString()
  readonly statusName: string;
}
