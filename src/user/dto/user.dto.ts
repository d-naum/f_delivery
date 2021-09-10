import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsertDTO {
  @IsNotEmpty()
  @IsString()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
