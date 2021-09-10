import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO, UpdateOrderStatusDTO } from './dto/update-order.dto';
import { Order, OrderStatus } from './interfaces/order.interface';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrders(): Promise<Order[]>;
    create(params: any, order: CreateOrderDTO): Promise<Order>;
    updateOrder(params: any, recordToUpdate: UpdateOrderDTO): Promise<UpdateResult>;
    getOrder(params: any): Promise<Order>;
    getOrderStatus(params: any): Promise<OrderStatus>;
    updateOrderStatus(params: any, recordToUpdate: UpdateOrderStatusDTO): Promise<UpdateResult>;
    deleteProduct(params: any): Promise<DeleteResult>;
}
