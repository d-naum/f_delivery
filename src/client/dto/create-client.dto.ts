import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDTO {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly phone: string;
  @IsNotEmpty()
  @IsString()
  readonly company: string;
  @IsNotEmpty()
  @IsString()
  readonly note: string;
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsInt()
  readonly postCode: string;
  @IsOptional()
  @IsString()
  readonly floor: string;
  //user
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
