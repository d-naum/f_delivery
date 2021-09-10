import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly info: string;
  @IsNotEmpty()
  @IsInt()
  readonly price: number;
  @IsNotEmpty()
  @IsInt()
  readonly categoryId: number;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
  @IsNotEmpty()
  @IsBoolean()
  readonly outOfStock: boolean;
  @IsOptional()
  @IsArray()
  readonly addons: CreateAddonsDTO[];
}
export class CreateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
export class CreateAddonsDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsInt()
  readonly price: number;
}

export class OrderProductDTO {
  @IsNotEmpty()
  @IsInt()
  readonly id: number;
  @IsNotEmpty()
  @IsString()
  readonly title: string;
  @IsNotEmpty()
  @IsString()
  readonly info: string;
  @IsNotEmpty()
  @IsInt()
  readonly price: number;
  @IsNotEmpty()
  @IsInt()
  readonly categoryId: number;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
  @IsOptional()
  @IsArray()
  readonly addons: CreateAddonsDTO[];
}
