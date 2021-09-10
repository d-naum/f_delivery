import { ClientEntity } from './client.entity';
export declare class ClientAddressEntity {
    id: number;
    street: string;
    streetNo: number;
    city: string;
    postCode: string;
    floor: string;
    client: ClientEntity;
}
