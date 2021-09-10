import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateSettingsDTO {
  @IsNotEmpty()
  @IsString()
  readonly brandName: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly contact: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly paypalClientId: string;

  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
}
