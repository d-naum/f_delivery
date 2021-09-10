import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCompanyDTO {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly imprint: string;
  // @IsArray()
  // readonly deliveryTimes: UpdateDeliveryTimesDTO[];
  @IsOptional()
  @IsInt()
  readonly minDeliveryAmount: number;
  @IsOptional()
  @IsString()
  readonly status: string;
  // @IsArray()
  // readonly deliveryPoscodes: UpdateDeliveryPoscodesDTO[];
}
export class UpdateDeliveryTimesDTO {
  @IsOptional()
  @IsString()
  readonly day: string;
  @IsOptional()
  @IsString()
  readonly startTime: string;
  @IsOptional()
  @IsString()
  readonly endTime: string;
}
export class UpdateDeliveryPoscodesDTO {
  @IsOptional()
  @IsInt()
  readonly number: string;
  @IsOptional()
  @IsString()
  readonly long: string;
  @IsOptional()
  @IsString()
  readonly lat: string;
}
export class UpdateStatusDTO {
  @IsOptional()
  @IsString()
  readonly status: string;
}
