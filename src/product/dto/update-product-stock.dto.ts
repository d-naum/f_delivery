import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateProductStockDTO {
  @IsBoolean()
  readonly outOfStock: boolean;
}
