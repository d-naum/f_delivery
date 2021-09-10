import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmailDTO {
  @IsNotEmpty()
  @IsString()
  readonly from: string;
  @IsNotEmpty()
  @IsString()
  readonly to: string;
  @IsNotEmpty()
  @IsString()
  readonly message: string;
  @IsNotEmpty()
  @IsInt()
  readonly companyId: number;
}
