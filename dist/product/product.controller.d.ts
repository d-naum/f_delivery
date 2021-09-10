import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateAddonsDTO, CreateCategoryDTO, CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Addons, Category, Product } from './interfaces/product.interface';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createCategory(category: CreateCategoryDTO): Promise<Category>;
    deleteCategory(id: any): Promise<DeleteResult>;
    updateCategory(id: any, categoryUpdate: CreateCategoryDTO): Promise<Category>;
    getCategories(): Promise<Category[]>;
    getCategory(params: any): Promise<Category>;
    getProductByCategories(params: any): Promise<Product[]>;
    createAddons(addons: CreateAddonsDTO): Promise<Addons>;
    deleteAddon(id: any): Promise<DeleteResult>;
    updateAddons(params: any, addonsUpdate: CreateAddonsDTO): Promise<Category>;
    getAddons(): Promise<Addons[]>;
    getAddon(id: any): Promise<Addons>;
    createProduct(product: CreateProductDTO): Promise<Product>;
    getProduct(id: any): Promise<Product>;
    getProducts(): Promise<Product[]>;
    getProductCategories(id: any): Promise<Category>;
    getProductAddons(id: any): Promise<Addons[]>;
    updateProduct(params: any, recordToUpdate: UpdateProductDTO): Promise<UpdateResult>;
    updateProductStock(params: any, recordToUpdate: UpdateProductDTO): Promise<UpdateResult>;
    deleteProduct(params: any): Promise<DeleteResult>;
}
