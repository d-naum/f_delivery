import { Company } from 'src/company/interfaces/company.interface';

export interface Product {
  id: number;
  title: string;
  info: string;
  price: number;
  outOfStock: boolean;
  category: Category;
  addons: Addons[];
  company: Company;
}
export interface Category {
  id: number;
  name: string;
}
export class Addons {
  id: number;
  name: string;
  price: number;
}
