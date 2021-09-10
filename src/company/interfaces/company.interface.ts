import { User } from 'src/user/interfaces/user.interface';

export interface Company {
  id: number;
  name: string;
  imprint: string;
  deliveryTimes: DeliveryTimes[];
  minDeliveryAmount: number;
  status: string;
  deliveryPoscodes: DeliveryPoscodes[];
  user: User;
}
export interface DeliveryTimes {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
}
export interface DeliveryPoscodes {
  id: number;
  number: number;
  long: string;
  lat: string;
}
