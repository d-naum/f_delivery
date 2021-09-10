"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_entity_1 = require("../client/entities/client.entity");
const company_entity_1 = require("../company/entities/company.entity");
const coupon_entity_1 = require("../coupon/entities/coupon.entity");
const order_entity_1 = require("../order/entities/order.entity");
const user_module_1 = require("../user/user.module");
const links_entity_1 = require("./entities/links.entity");
const payment_status_entity_1 = require("./entities/payment-status.entity");
const payment_entity_1 = require("./entities/payment.entity");
const payment_controller_1 = require("./payment.controller");
const payment_service_1 = require("./payment.service");
let PaymentModule = class PaymentModule {
};
PaymentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                payment_entity_1.PaymentEntity,
                payment_status_entity_1.PaymentStatusEntity,
                links_entity_1.LinksEntity,
                coupon_entity_1.CouponEntity,
                client_entity_1.ClientEntity,
                company_entity_1.CompanyEntity,
                order_entity_1.OrderEntity,
            ]),
            user_module_1.UserModule,
        ],
        controllers: [payment_controller_1.PaymentController],
        providers: [payment_service_1.PaymentService],
    })
], PaymentModule);
exports.PaymentModule = PaymentModule;
//# sourceMappingURL=payment.module.js.map