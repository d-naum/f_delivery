"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const pass_hash_service_1 = require("./auth/pass-hash/pass-hash.service");
const client_address_entity_1 = require("./entities/client-address.entity");
const client_entity_1 = require("./entities/client.entity");
let ClientService = class ClientService {
    constructor(clientRepository, clientAddressRepository, userReppository, passHashService) {
        this.clientRepository = clientRepository;
        this.clientAddressRepository = clientAddressRepository;
        this.userReppository = userReppository;
        this.passHashService = passHashService;
    }
    async create(client) {
        const checkUser = await this.userReppository.findOne({
            email: client.email,
        });
        if (checkUser) {
            throw new common_1.UnauthorizedException(`User already created with this ${client.email}`);
        }
        else {
            const encryptedPassword = await this.passHashService.hashPassword(client.password);
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
            const newClient = new client_entity_1.ClientEntity();
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
            return Object.assign(Object.assign({}, newClient), { clientAddress });
        }
    }
    async getOne(id) {
        const results = await this.clientRepository.findOne(id, {
            relations: ['clientAddress'],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any client');
        }
        return results;
    }
    async getAll() {
        const results = await this.clientRepository.find({
            relations: ['clientAddress'],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any client');
        }
        return results;
    }
    async delete(cId, cAId) {
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
            return error;
        }
    }
    async update(id, recordToUpdate) {
        const client = await this.clientRepository.findOne(id, {
            relations: ['clientAddress'],
        });
        const { firstName, lastName, email, phone, company, note, preferredDeliveryTime, } = recordToUpdate;
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
        const clientAddress = await this.clientAddressRepository.findOne(client.clientAddress.id);
        const { street, streetNo, city, postCode, floor } = recordToUpdate;
        await this.clientAddressRepository.merge(clientAddress, {
            street,
            streetNo,
            city,
            postCode,
            floor,
        });
        const updatedClientAddress = await this.clientAddressRepository.save(clientAddress);
        return Object.assign(Object.assign({}, updateClient), { clientAddress: updatedClientAddress });
    }
};
ClientService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(client_entity_1.ClientEntity)),
    __param(1, typeorm_1.InjectRepository(client_address_entity_1.ClientAddressEntity)),
    __param(2, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        pass_hash_service_1.PassHashService])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map