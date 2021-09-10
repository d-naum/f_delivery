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
export declare class OrderService {
    private readonly orderRepository;
    private readonly clientRepository;
    private readonly couponRepository;
    private readonly orderStatusRepository;
    private readonly companyRepository;
    private readonly orderProductsEntity;
    constructor(orderRepository: Repository<OrderEntity>, clientRepository: Repository<ClientEntity>, couponRepository: Repository<CouponEntity>, orderStatusRepository: Repository<OrderStatusEntity>, companyRepository: Repository<CompanyEntity>, orderProductsEntity: Repository<OrderProductsEntity>);
    createOrder(clientId: number, order: CreateOrderDTO): Promise<Order>;
    getOrders(): Promise<Order[]>;
    getOrder(id: number): Promise<Order>;
    getOrderStatus(id: number): Promise<OrderStatus>;
    updateOrder(id: number, recordToUpdate: UpdateOrderDTO): Promise<UpdateResult>;
    updateOrderStatus(id: number, recordToUpdate: UpdateOrderStatusDTO): Promise<UpdateResult>;
    deleteOrder(id: number): Promise<DeleteResult>;
}
