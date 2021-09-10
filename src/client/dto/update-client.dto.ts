import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class UpdateClientDTO {
  @IsOptional()
  @IsString()
  readonly firstName: string;
  @IsOptional()
  @IsString()
  readonly lastName: string;
  @IsOptional()
  @IsString()
  readonly email: string;
  @IsOptional()
  @IsString()
  readonly phone: string;
  @IsOptional()
  @IsString()
  readonly company: string;
  @IsOptional()
  @IsString()
  readonly note: string;
  @IsOptional()
  @IsString()
  readonly preferredDeliveryTime: string;
  //address entities
  @IsOptional()
  @IsString()
  readonly street: string;
  @IsOptional()
  @IsInt()
  readonly streetNo: number;
  @IsOptional()
  @IsString()
  readonly city: string;
  @IsOptional()
  @IsInt()
  readonly postCode: string;
  @IsOptional()
  @IsString()
  readonly floor: string;
}
