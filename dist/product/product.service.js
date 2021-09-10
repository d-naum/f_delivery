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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("../company/entities/company.entity");
const typeorm_2 = require("typeorm");
const addons_entity_1 = require("./entities/addons.entity");
const category_entity_1 = require("./entities/category.entity");
const product_entity_1 = require("./entities/product.entity");
let ProductService = class ProductService {
    constructor(categroyRepository, addonsRepository, productRepository, companyRepository) {
        this.categroyRepository = categroyRepository;
        this.addonsRepository = addonsRepository;
        this.productRepository = productRepository;
        this.companyRepository = companyRepository;
    }
    async createCategory(category) {
        return await this.categroyRepository.save(category);
    }
    async deleteCategory(id) {
        return await this.categroyRepository.delete(id);
    }
    async getCategories() {
        return await this.categroyRepository.find();
    }
    async getCategory(id) {
        return await this.categroyRepository.findOne(id);
    }
    async updateCategory(id, categoryRecord) {
        const category = await this.categroyRepository.findOne(id);
        if (!category) {
            throw new common_1.NotFoundException('Could not find any Setting!');
        }
        await this.categroyRepository.merge(category, categoryRecord);
        return await this.categroyRepository.save(category);
    }
    async createAddons(addons) {
        return await this.addonsRepository.save(addons);
    }
    async deleteAddon(id) {
        return await this.addonsRepository.delete(id);
    }
    async getAddons() {
        return await this.addonsRepository.find();
    }
    async getAddon(id) {
        return await this.addonsRepository.findOne(id);
    }
    async updateAddons(id, addonsRecord) {
        const addons = await this.addonsRepository.findOne(id);
        if (!addons) {
            throw new common_1.NotFoundException('Could not find any Category');
        }
        await this.addonsRepository.merge(addons, addonsRecord);
        return await this.addonsRepository.save(addons);
    }
    async createProduct(product) {
        const resultCategory = await this.categroyRepository.findOne(product.categoryId);
        const resultCompany = await this.companyRepository.findOne(product.companyId);
        if (!resultCategory && resultCompany) {
            throw new common_1.NotFoundException('Could not find any category or company');
        }
        else {
            const resultProduct = await this.productRepository.save({
                title: product.title,
                info: product.info,
                price: product.price,
                category: resultCategory,
                addons: product.addons,
                company: resultCompany,
                outOfStock: product.outOfStock,
            });
            return Object.assign(Object.assign({}, resultProduct), { category: resultCategory, company: resultCompany });
        }
    }
    async getProduct(id) {
        const results = await this.productRepository.findOne(id, {
            relations: ['category', 'addons', 'company'],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        return results;
    }
    async getProductCategory(id) {
        const results = await this.productRepository.findOne(id, {
            relations: ['category'],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        return results.category;
    }
    async getProductByCategory(categoryId) {
        const results = await this.productRepository
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.category', 'category')
            .leftJoinAndSelect('product.company', 'company')
            .where('product.categoryId = :id', { id: categoryId })
            .getMany();
        if (!results) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        return results;
    }
    async getProducts() {
        const results = await this.productRepository
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.category', 'category')
            .leftJoinAndSelect('product.company', 'company')
            .getMany();
        if (!results) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        return results;
    }
    async getProductAddons(id) {
        const results = await this.productRepository.findOne(id, {
            relations: ['addons'],
        });
        if (!results) {
            throw new common_1.NotFoundException('Could not find any product');
        }
        return results.addons;
    }
    async updateProduct(id, recordToUpdate) {
        try {
            const resultCategory = await this.categroyRepository.findOne(recordToUpdate.categoryId);
            const resultCompany = await this.companyRepository.findOne(recordToUpdate.companyId);
            return await this.productRepository.update(id, {
                title: recordToUpdate.title,
                info: recordToUpdate.info,
                price: recordToUpdate.price,
                category: resultCategory,
                company: resultCompany
            });
        }
        catch (error) {
            return error;
        }
    }
    async updateProductStock(id, recordToUpdate) {
        try {
            return await this.productRepository.update(id, {
                outOfStock: recordToUpdate.outOfStock,
            });
        }
        catch (error) {
            return error;
        }
    }
    async deleteProduct(id) {
        return await this.productRepository.delete(id);
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_entity_1.CategoryEntity)),
    __param(1, typeorm_1.InjectRepository(addons_entity_1.AddonsEntity)),
    __param(2, typeorm_1.InjectRepository(product_entity_1.ProductEntity)),
    __param(3, typeorm_1.InjectRepository(company_entity_1.CompanyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map