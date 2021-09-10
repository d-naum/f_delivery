import { DeleteResult } from 'typeorm';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';
import { Client } from './interfaces/client.interface';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    create(client: CreateClientDTO): Promise<Client>;
    update(id: any, recordToUpdate: UpdateClientDTO): Promise<Client>;
    delete(params: any): Promise<DeleteResult>;
    getOne(id: any): Promise<Client>;
    getAll(): Promise<Client[]>;
}
