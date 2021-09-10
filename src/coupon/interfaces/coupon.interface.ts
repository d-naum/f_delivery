import { Client } from 'src/client/interfaces/client.interface';
export interface Coupon {
  id: number;
  number: number;
  client: Client;
  status: string;
}
