import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    getProduct(): string {
        return 'retorna todos los productos';
    }
}
