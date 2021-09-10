import { IsArray, IsInt, IsNotEmpty, IsString, IsOptional, IsNumber, IsDecimal } from 'class-validator';

export class CreatePaymentDTO {
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsInt()
  readonly clientId: number;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
  @IsArray()
  readonly links: CreateLinksDTO[];
  @IsOptional()
  @IsInt()
  readonly couponId: number;
  @IsNotEmpty()
  @IsInt()
  readonly orderId: number;
  @IsNotEmpty()
  @IsString()
  readonly paymentStatus: string;
}

export class CreateLinksDTO {
  @IsNotEmpty()
  @IsString()
  readonly href: string;
  @IsNotEmpty()
  @IsString()
  readonly rel: string;
  @IsNotEmpty()
  @IsString()
  readonly method: string;
}
