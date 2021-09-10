import { IsInt, IsNotEmpty } from 'class-validator';
import { Product } from 'src/product/interfaces/product.interface';

export class OrderProductQuantityDTO {
  @IsNotEmpty()
  @IsInt()
  readonly quantity: number;
  @IsNotEmpty()
  readonly product: Product;
}
