import { IsArray, IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateCompanyDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly imprint: string;
  @IsOptional()
  @IsArray()
  readonly deliveryTimes: CreateDeliveryTimesDTO[];
  @IsNotEmpty()
  @IsInt()
  readonly minDeliveryAmount: number;
  @IsNotEmpty()
  @IsString()
  readonly status: string;
  @IsOptional()
  @IsArray()
  readonly deliveryPoscodes: CreateDeliveryPoscodesDTO[];
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
export class CreateDeliveryTimesDTO {
  @IsNotEmpty()
  @IsString()
  readonly day: string;
  @IsNotEmpty()
  @IsString()
  readonly startTime: string;
  @IsNotEmpty()
  @IsString()
  readonly endTime: string;
}
export class CreateDeliveryPoscodesDTO {
  @IsNotEmpty()
  @IsInt()
  readonly number: number;
  @IsNotEmpty()
  @IsString()
  readonly long: string;
  @IsNotEmpty()
  @IsString()
  readonly lat: string;
}
