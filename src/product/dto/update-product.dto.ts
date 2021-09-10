import { IsBoolean, IsInt, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsString()
  readonly info: string;
  @IsOptional()
  @IsInt()
  readonly price: number;
  @IsOptional()
  @IsInt()
  readonly categoryId: number;
  @IsOptional()
  @IsInt()
  readonly companyId: number;
  @IsOptional()
  @IsBoolean()
  readonly outOfStock: boolean;
  // @IsOptional()
  // @IsArray()
  // readonly addons: CreateAddonsDTO[];
}
