import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { UserIdAuthGuard } from 'src/user/guards/user-id-auth.guard';
import { DeleteResult } from 'typeorm';
import { ClientService } from './client.service';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDTO } from './dto/update-client.dto';
import { Client } from './interfaces/client.interface';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) { }

  @Post()
  async create(@Body() client: CreateClientDTO): Promise<Client> {
    return await this.clientService.create(client);
  }

  @hasRoles(['admin', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id,
    @Body() recordToUpdate: UpdateClientDTO,
  ): Promise<Client> {
    return await this.clientService.update(+id, recordToUpdate);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':clientId/:addressId')
  async delete(@Param() params): Promise<DeleteResult> {
    return await this.clientService.delete(+params.clientId, +params.addressId);
  }

  @Get(':id')
  async getOne(@Param('id') id): Promise<Client> {
    return await this.clientService.getOne(+id);
  }

  @Get('')
  async getAll(): Promise<Client[]> {
    return await this.clientService.getAll();
  }
}
