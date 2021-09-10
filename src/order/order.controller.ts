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
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO, UpdateOrderStatusDTO } from './dto/update-order.dto';
import { Order, OrderStatus } from './interfaces/order.interface';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) { }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('')
  async getOrders(): Promise<Order[]> {
    return await this.orderService.getOrders();
  }

  @hasRoles(['admin', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Post('client/:id')
  async create(@Param() params, @Body() order: CreateOrderDTO): Promise<Order> {
    return await this.orderService.createOrder(+params.id, order);
  }

  @hasRoles(['admin', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put(':id/order/:orderId')
  async updateOrder(
    @Param() params,
    @Body() recordToUpdate: UpdateOrderDTO,
  ): Promise<UpdateResult> {
    return await this.orderService.updateOrder(+params.orderId, recordToUpdate);
  }

  @hasRoles(['admin', 'client', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get(':id/order/:orderId')
  async getOrder(@Param() params): Promise<Order> {
    return await this.orderService.getOrder(+params.orderId);
  }

  @hasRoles(['admin', 'company', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get(':id/status/:orderId')
  async getOrderStatus(@Param() params): Promise<OrderStatus> {
    return await this.orderService.getOrderStatus(+params.orderId);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put(':id/status/:orderId')
  async updateOrderStatus(
    @Param() params,
    @Body() recordToUpdate: UpdateOrderStatusDTO,
  ): Promise<UpdateResult> {
    return await this.orderService.updateOrderStatus(
      +params.orderId,
      recordToUpdate,
    );
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':orderId')
  async deleteProduct(@Param() params): Promise<DeleteResult> {
    return await this.orderService.deleteOrder(+params.orderId);
  }
}
