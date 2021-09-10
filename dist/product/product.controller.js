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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../user/decorator/roles.decorator");
const jwt_auth_guard_1 = require("../user/guards/jwt-auth.guard");
const roles_guard_1 = require("../user/guards/roles.guard");
const user_id_auth_guard_1 = require("../user/guards/user-id-auth.guard");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createCategory(category) {
        return await this.productService.createCategory(category);
    }
    async deleteCategory(id) {
        return await this.productService.deleteCategory(id);
    }
    async updateCategory(id, categoryUpdate) {
        return await this.productService.updateCategory(+id, categoryUpdate);
    }
    async getCategories() {
        return await this.productService.getCategories();
    }
    async getCategory(params) {
        return await this.productService.getCategory(+params.id);
    }
    async getProductByCategories(params) {
        return await this.productService.getProductByCategory(+params.id);
    }
    async createAddons(addons) {
        return await this.productService.createAddons(addons);
    }
    async deleteAddon(id) {
        return await this.productService.deleteAddon(id);
    }
    async updateAddons(params, addonsUpdate) {
        return await this.productService.updateAddons(+params.addonId, addonsUpdate);
    }
    async getAddons() {
        return await this.productService.getAddons();
    }
    async getAddon(id) {
        return await this.productService.getAddon(id);
    }
    async createProduct(product) {
        return await this.productService.createProduct(product);
    }
    async getProduct(id) {
        return await this.productService.getProduct(+id);
    }
    async getProducts() {
        return await this.productService.getProducts();
    }
    async getProductCategories(id) {
        return await this.productService.getProductCategory(+id);
    }
    async getProductAddons(id) {
        return await this.productService.getProductAddons(+id);
    }
    async updateProduct(params, recordToUpdate) {
        return await this.productService.updateProduct(+params.productId, recordToUpdate);
    }
    async updateProductStock(params, recordToUpdate) {
        return await this.productService.updateProductStock(+params.productId, recordToUpdate);
    }
    async deleteProduct(params) {
        return await this.productService.deleteProduct(+params.productId);
    }
};
__decorate([
    roles_decorator_1.hasRoles(['admin']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Post('categories'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateCategoryDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createCategory", null);
__decorate([
    roles_decorator_1.hasRoles(['admin']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Delete('category/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteCategory", null);
__decorate([
    roles_decorator_1.hasRoles(['admin']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Put('categories/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateCategoryDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateCategory", null);
__decorate([
    common_1.Get('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCategories", null);
__decorate([
    common_1.Get('category/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCategory", null);
__decorate([
    common_1.Get('categories/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductByCategories", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Post(':id/addons'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateAddonsDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createAddons", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Delete('addons/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteAddon", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Put('addons/:addonId'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateAddonsDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateAddons", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Get('addons'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAddons", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Get('addon/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAddon", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Post('company/:id'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    roles_decorator_1.hasRoles(['admin']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get(':id/categories'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductCategories", null);
__decorate([
    common_1.Get(':id/addons'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductAddons", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Put(':productId'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_product_dto_1.UpdateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Put('stock/:productId'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_product_dto_1.UpdateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProductStock", null);
__decorate([
    roles_decorator_1.hasRoles(['admin', 'company']),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, user_id_auth_guard_1.UserIdAuthGuard),
    common_1.Delete(':id/product/:productId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map