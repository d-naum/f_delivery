import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { UserIdAuthGuard } from 'src/user/guards/user-id-auth.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import {
  CreateAddonsDTO,
  CreateCategoryDTO,
  CreateProductDTO,
} from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Addons, Category, Product } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) { }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('categories')
  async createCategory(@Body() category: CreateCategoryDTO): Promise<Category> {
    return await this.productService.createCategory(category);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('category/:id')
  async deleteCategory(@Param('id') id,): Promise<DeleteResult> {
    return await this.productService.deleteCategory(id);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put('categories/:id')
  async updateCategory(
    @Param('id') id,
    @Body() categoryUpdate: CreateCategoryDTO,
  ): Promise<Category> {
    return await this.productService.updateCategory(+id, categoryUpdate);
  }

  @Get('categories')
  async getCategories(): Promise<Category[]> {
    return await this.productService.getCategories();
  }

  @Get('category/:id')
  async getCategory(@Param() params): Promise<Category> {
    return await this.productService.getCategory(+params.id);
  }

  @Get('categories/:id')
  async getProductByCategories(@Param() params): Promise<Product[]> {
    return await this.productService.getProductByCategory(+params.id);
  }

  //addons
  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Post(':id/addons')
  async createAddons(@Body() addons: CreateAddonsDTO): Promise<Addons> {
    return await this.productService.createAddons(addons);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Delete('addons/delete/:id')
  async deleteAddon(@Param('id') id): Promise<DeleteResult> {
    return await this.productService.deleteAddon(id);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put('addons/:addonId')
  async updateAddons(
    @Param() params,
    @Body() addonsUpdate: CreateAddonsDTO,
  ): Promise<Category> {
    return await this.productService.updateAddons(
      +params.addonId,
      addonsUpdate,
    );
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get('addons')
  async getAddons(): Promise<Addons[]> {
    return await this.productService.getAddons();
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get('addon/:id')
  async getAddon(@Param('id') id): Promise<Addons> {
    return await this.productService.getAddon(id);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Post('company/:id')
  async createProduct(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productService.createProduct(product);
  }

  @Get(':id')
  async getProduct(@Param('id') id): Promise<Product> {
    return await this.productService.getProduct(+id);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get('')
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }

  @Get(':id/categories')
  async getProductCategories(@Param('id') id): Promise<Category> {
    return await this.productService.getProductCategory(+id);
  }

  @Get(':id/addons')
  async getProductAddons(@Param('id') id): Promise<Addons[]> {
    return await this.productService.getProductAddons(+id);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put(':productId')
  async updateProduct(
    @Param() params,
    @Body() recordToUpdate: UpdateProductDTO,
  ): Promise<UpdateResult> {
    return await this.productService.updateProduct(
      +params.productId,
      recordToUpdate,
    );
  }

  // isOutOfStock
  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Put('stock/:productId')
  async updateProductStock(
    @Param() params,
    @Body() recordToUpdate: UpdateProductDTO,
  ): Promise<UpdateResult> {
    return await this.productService.updateProductStock(
      +params.productId,
      recordToUpdate,
    );
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Delete(':id/product/:productId')
  async deleteProduct(@Param() params): Promise<DeleteResult> {
    return await this.productService.deleteProduct(+params.productId);
  }
}
