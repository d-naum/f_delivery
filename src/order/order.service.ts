import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from 'src/client/entities/client.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CouponEntity } from 'src/coupon/entities/coupon.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO, UpdateOrderStatusDTO } from './dto/update-order.dto';
import { OrderProductsEntity } from './entities/order-product.entity';
import { OrderEntity } from './entities/order.entity';
import { OrderStatusEntity } from './entities/status.entity';
import { Order, OrderStatus } from './interfaces/order.interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
    @InjectRepository(CouponEntity)
    private readonly couponRepository: Repository<CouponEntity>,
    @InjectRepository(OrderStatusEntity)
    private readonly orderStatusRepository: Repository<OrderStatusEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
    @InjectRepository(OrderProductsEntity)
    private readonly orderProductsEntity: Repository<OrderProductsEntity>,
  ) { }

  async createOrder(clientId: number, order: CreateOrderDTO): Promise<Order> {
    const resultClient = await this.clientRepository.findOne(order.clientId, {
      relations: ['clientAddress'],
    });
    // const resultCoupon = await this.couponRepository.findOne(order.couponId, {
    //   relations: ['client'],
    // });
    const resultCompany = await this.companyRepository.findOne(order.companyId);
    if (!resultClient && !resultCompany) {
      throw new NotFoundException('Could not find any Client or company');
    } else {
      let orderProducts = [];
      if (Array.isArray(order.orderProducts) && order.orderProducts.length) {
        orderProducts = await this.orderProductsEntity.save(
          order.orderProducts,
        );
      }
      const orderStatus = await this.orderStatusRepository.save({
        name: order.statusName,
      });
      const newOrder = new OrderEntity();
      newOrder.client = resultClient;
      newOrder.company = resultCompany;
      newOrder.orderProducts = orderProducts;
      newOrder.status = orderStatus;
      newOrder.couponId = order.couponId;
      newOrder.deliveryDate = order.deliveryDate;
      newOrder.complete = order.complete;
      newOrder.amount = order.amount;

      const resultOrder = await this.orderRepository.save(newOrder);
      return {
        ...resultOrder,
        client: resultClient,
        company: resultCompany,
      };
    }
  }

  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.find({
      relations: [
        'status',
        'client',
        'orderProducts',
        'orderProducts.product',
        'company',
      ],
    });
  }

  async getOrder(id: number): Promise<Order> {
    const results = await this.orderRepository.findOne(id, {
      relations: [
        'status',
        'client',
        'orderProducts',
        'orderProducts.product',
        'company',
      ],
    });
    if (!results) {
      throw new NotFoundException('Could not find any product');
    }
    return results;
  }

  async getOrderStatus(id: number): Promise<OrderStatus> {
    const results = await this.orderRepository.findOne(id, {
      relations: ['status'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any order');
    }
    return results.status;
  }

  async updateOrder(
    id: number,
    recordToUpdate: UpdateOrderDTO,
  ): Promise<UpdateResult> {
    return await this.orderRepository.update(id, recordToUpdate);
  }

  async updateOrderStatus(id: number, recordToUpdate: UpdateOrderStatusDTO): Promise<UpdateResult> {
    try {
      const resultOrder = await this.orderRepository.findOne(id, {
        relations: ['status'],
      });
      const statusId = resultOrder.status;
      return await this.orderStatusRepository.update(statusId, recordToUpdate);
    }
    catch (error) {
      console.log(error)
      return error
    }
  }

  async deleteOrder(id: number): Promise<DeleteResult> {
    return await this.orderRepository.delete(id);
  }
}
