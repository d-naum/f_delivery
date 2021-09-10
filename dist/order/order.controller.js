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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../user/decorator/roles.decorator");
const jwt_auth_guard_1 = require("../user/guards/jwt-auth.guard");
const roles_guard_1 = require("../user/guards/roles.guard");
const user_id_auth_guard_1 = require("../user/guards/user-id-auth.guard");
const create_order_dto_1 = require("./dto/create-order.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getOrders() {
        return await this.orderService.getOrders();
    }
    async create(params, order) {
        return await this.orderService.createOrder(+params.id, order);
    }
    async updateOrder(params, recordToUpdate) {
        return await this.orderService.updateOrder(+params.orderId, recordToUpdate);
    }
    async getOrder(params) {
        return await this.orderService.getOrder(+params.orderId);
    }
    async getOrderStatus(params) {
        return await this.orderService.getOrderStatus(+params.orderId);
    }
    async updateOrderStatus(params, recordToUpdate) {
        return await this.orderService.updateOrderStatus(+params.orderId, recordToUpdate);
    }
    async deleteProduct(params) {
        return await this.orderService.deleteOrder(+params.orderId);
    }
};
__decorate([
    roles_decorator_1.hasRoles(['admin']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrders", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'client']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Post('client/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_order_dto_1.CreateOrderDTO]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'client']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Put(':id/order/:orderId'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_order_dto_1.UpdateOrderDTO]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrder", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'client', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Get(':id/order/:orderId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company', 'client']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Get(':id/status/:orderId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderStatus", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Put(':id/status/:orderId'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_order_dto_1.UpdateOrderStatusDTO]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderStatus", null);
__decorate([
    roles_decorator_1.hasRoles(['admin']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Delete(':orderId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteProduct", null);
OrderController = __decorate([
    common_1.Controller('orders'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map