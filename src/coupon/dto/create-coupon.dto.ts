import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCouponDTO {
  @IsNotEmpty()
  @IsInt()
  readonly number: number;
  @IsNotEmpty()
  @IsInt()
  readonly clientId: number;
  @IsNotEmpty()
  @IsString()
  readonly status: string;
}
