export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  clientAddress: ClientAddress;
  email: string;
  phone: string;
  company: string;
  note: string;
  preferredDeliveryTime: string;
}
export interface ClientAddress {
  id: number;
  street?: string;
  streetNo?: number;
  city?: string;
  postCode: string;
  floor?: string;
}
export interface LoginRsp {
  readonly token: string;
}
