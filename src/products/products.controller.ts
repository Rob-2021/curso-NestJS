import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto/products.dtos';

@Controller('products')
export class ProductsController {

    constructor(private productsService:ProductsService){

    }

    //ruta principal encuentra todo
    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    // /products/:id
    //retorna un producto
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.productsService.findOne(id);
    }

    //ruta para crear
    @Post()
    create(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload);
    }

    //actualizar
    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateProductDto){
        return this.productsService.update(id, payload);
    }

    //eliminar
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){
        return this.productsService.delete(id);
    }
}
