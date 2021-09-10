import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {
  CreateAddonsDTO,
  CreateCategoryDTO,
  CreateProductDTO,
} from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { AddonsEntity } from './entities/addons.entity';
import { CategoryEntity } from './entities/category.entity';
import { ProductEntity } from './entities/product.entity';
import { Addons, Category, Product } from './interfaces/product.interface';
import { UpdateProductStockDTO } from './dto/update-product-stock.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categroyRepository: Repository<CategoryEntity>,
    @InjectRepository(AddonsEntity)
    private readonly addonsRepository: Repository<AddonsEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(CompanyEntity)
    private readonly companyRepository: Repository<CompanyEntity>,
  ) { }

  //category
  async createCategory(category: CreateCategoryDTO): Promise<Category> {
    return await this.categroyRepository.save(category);
  }

  async deleteCategory(id: number): Promise<DeleteResult> {
    return await this.categroyRepository.delete(id);
  }

  async getCategories(): Promise<Category[]> {
    return await this.categroyRepository.find();
  }

  async getCategory(id: number): Promise<Category> {
    return await this.categroyRepository.findOne(id);
  }

  async updateCategory(
    id: number,
    categoryRecord: CreateCategoryDTO,
  ): Promise<Category> {
    // return await this.productRepository.update(id, recordToUpdate);
    const category = await this.categroyRepository.findOne(id);
    if (!category) {
      throw new NotFoundException('Could not find any Setting!');
    }
    await this.categroyRepository.merge(category, categoryRecord);
    return await this.categroyRepository.save(category);
  }

  //addons
  async createAddons(addons: CreateAddonsDTO): Promise<Addons> {
    return await this.addonsRepository.save(addons);
  }

  async deleteAddon(id: number): Promise<DeleteResult> {
    return await this.addonsRepository.delete(id)
  }

  async getAddons(): Promise<Addons[]> {
    return await this.addonsRepository.find();
  }

  async getAddon(id: number): Promise<Addons> {
    return await this.addonsRepository.findOne(id)
  }

  async updateAddons(
    id: number,
    addonsRecord: CreateAddonsDTO,
  ): Promise<Addons> {
    const addons = await this.addonsRepository.findOne(id);
    if (!addons) {
      throw new NotFoundException('Could not find any Category');
    }
    await this.addonsRepository.merge(addons, addonsRecord);
    return await this.addonsRepository.save(addons);
  }

  //product
  async createProduct(product: CreateProductDTO): Promise<Product> {
    const resultCategory = await this.categroyRepository.findOne(
      product.categoryId,
    );
    const resultCompany = await this.companyRepository.findOne(
      product.companyId,
    );
    if (!resultCategory && resultCompany) {
      throw new NotFoundException('Could not find any category or company');
    } else {
      const resultProduct = await this.productRepository.save({
        title: product.title,
        info: product.info,
        price: product.price,
        category: resultCategory,
        addons: product.addons,
        company: resultCompany,
        outOfStock: product.outOfStock,
      });
      return {
        ...resultProduct,
        category: resultCategory,
        company: resultCompany,
      };
    }
  }

  async getProduct(id: number): Promise<Product> {
    const results = await this.productRepository.findOne(id, {
      relations: ['category', 'addons', 'company'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any product');
    }
    return results;
  }

  async getProductCategory(id: number): Promise<Category> {
    const results = await this.productRepository.findOne(id, {
      relations: ['category'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any product');
    }
    return results.category;
  }

  async getProductByCategory(categoryId: number): Promise<Product[]> {
    const results = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.company', 'company')
      .where('product.categoryId = :id', { id: categoryId })
      .getMany();
    if (!results) {
      throw new NotFoundException('Could not find any product');
    }
    return results;
  }

  async getProducts(): Promise<Product[]> {
    const results = await this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.company', 'company')
      .getMany();
    if (!results) {
      throw new NotFoundException('Could not find any product');
    }
    return results;
  }

  async getProductAddons(id: number): Promise<Addons[]> {
    const results = await this.productRepository.findOne(id, {
      relations: ['addons'],
    });
    if (!results) {
      throw new NotFoundException('Could not find any product');
    }
    return results.addons;
  }

  async updateProduct(
    id: number,
    recordToUpdate: UpdateProductDTO,
  ): Promise<UpdateResult> {
    try {
      const resultCategory = await this.categroyRepository.findOne(
        recordToUpdate.categoryId,
      );
      const resultCompany = await this.companyRepository.findOne(
        recordToUpdate.companyId,
      );
      return await this.productRepository.update(id, {
        title: recordToUpdate.title,
        info: recordToUpdate.info,
        price: recordToUpdate.price,
        category: resultCategory,
        company: resultCompany
      });
    }
    catch (error) {
      return error
    }
  }

  async updateProductStock(
    id: number,
    recordToUpdate: UpdateProductStockDTO,
  ): Promise<UpdateResult> {
    try {
      return await this.productRepository.update(id, {
        outOfStock: recordToUpdate.outOfStock,
      });
    }
    catch (error) {
      return error
    }
  }

  async deleteProduct(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
