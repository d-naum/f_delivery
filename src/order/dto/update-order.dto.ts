import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsDecimal
} from 'class-validator';
import { UpdateProductDTO } from 'src/product/dto/update-product.dto';

export class UpdateOrderDTO {
  @IsArray()
  readonly product: UpdateProductDTO[];
  @IsOptional()
  @IsString()
  readonly deliveryDate: string;
  readonly status: UpdateOrderStatusDTO;
  @IsOptional()
  @IsBoolean()
  readonly complete: boolean;
  @IsOptional()
  @IsInt()
  readonly couponId: number;
  @IsOptional()
  @IsInt()
  readonly amount: number;
}
export class UpdateOrderStatusDTO {
  @IsOptional()
  @IsString()
  readonly name: string;
}
