import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { PassHashService } from './auth/pass-hash/pass-hash.service';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';
import { ClientAddressEntity } from './entities/client-address.entity';
import { ClientEntity } from './entities/client.entity';
import { Client } from './interfaces/client.interface';
export declare class ClientService {
    private readonly clientRepository;
    private readonly clientAddressRepository;
    private readonly userReppository;
    private passHashService;
    constructor(clientRepository: Repository<ClientEntity>, clientAddressRepository: Repository<ClientAddressEntity>, userReppository: Repository<UserEntity>, passHashService: PassHashService);
    create(client: CreateClientDTO): Promise<Client>;
    getOne(id: number): Promise<Client>;
    getAll(): Promise<Client[]>;
    delete(cId: number, cAId: number): Promise<any>;
    update(id: number, recordToUpdate: UpdateClientDTO): Promise<Client>;
}
