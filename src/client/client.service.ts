import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PassHashService } from './auth/pass-hash/pass-hash.service';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';
import { ClientAddressEntity } from './entities/client-address.entity';
import { ClientEntity } from './entities/client.entity';
import { Client } from './interfaces/client.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
    @InjectRepository(ClientAddressEntity)
    private readonly clientAddressRepository: Repository<ClientAddressEntity>,
    @InjectRepository(UserEntity)
    private readonly userReppository: Repository<UserEntity>,
    private passHashService: PassHashService,
  ) { }

  async create(client: CreateClientDTO): Promise<Client> {
    const checkUser = await this.userReppository.findOne({
      email: client.email,
    });
    if (checkUser) {
      throw new UnauthorizedException(
        `User already created with this ${client.email}`,
      );
    } else {
      const encryptedPassword = await this.passHashService.hashPassword(
        client.password,
      );
      const user = await this.userReppository.save({
        email: client.email,
        password: encryptedPassword,
        hasRole: 'client',
      });
      const clientAddress = await this.clientAddressRepository.save({
        street: client.street,
        streetNo: client.streetNo,
        city: client.city,
        postCode: client.postCode,
        floor: client.floor,
      });
      const newClient = new ClientEntity();
      newClient.firstName = client.firstName;
      newClient.lastName = client.lastName;
      newClient.clientAddress = clientAddress;
      newClient.email = client.email;
      newClient.phone = client.phone;
      newClient.company = client.company;
      newClient.note = client.note;
      newClient.preferredDeliveryTime = client.preferredDeliveryTime;
      newClient.user = user;
      await this.clientRepository.save(newClient);
      return { ...newClient, clientAddress };
    }
  }

  async getOne(id: number): Promise<Client> {
    const results = await this.clientRepository.findOne(id, {
      relations: ['clientAddress'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any client');
    }
    return results;
  }

  async getAll(): Promise<Client[]> {
    const results = await this.clientRepository.find({
      relations: ['clientAddress'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any client');
    }
    return results;
  }

  async delete(cId: number, cAId: number): Promise<any> {
    try {
      await Promise.all([
        await this.clientAddressRepository.delete(cAId),
        await this.clientRepository.delete(cId),
      ]);
      return {
        msg: `Client is deleted with id ${cId} and Address with id ${cAId}`,
      };
    }
    catch (error) {
      return error
    }
  }

  async update(id: number, recordToUpdate: UpdateClientDTO): Promise<Client> {
    const client = await this.clientRepository.findOne(id, {
      relations: ['clientAddress'],
    });
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      note,
      preferredDeliveryTime,
    } = recordToUpdate;
    await this.clientRepository.merge(client, {
      firstName,
      lastName,
      email,
      phone,
      company,
      note,
      preferredDeliveryTime,
    });
    const updateClient = await this.clientRepository.save(client);
    const clientAddress = await this.clientAddressRepository.findOne(
      client.clientAddress.id,
    );
    const { street, streetNo, city, postCode, floor } = recordToUpdate;
    await this.clientAddressRepository.merge(clientAddress, {
      street,
      streetNo,
      city,
      postCode,
      floor,
    });
    const updatedClientAddress = await this.clientAddressRepository.save(
      clientAddress,
    );
    return { ...updateClient, clientAddress: updatedClientAddress };
  }
}
