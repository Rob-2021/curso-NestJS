import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

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
    findOne(@Param('id') id:string) {
        return this.productsService.findOne(Number(id));
    }

    //ruta para crear
    @Post()
    create(@Body() payload: any) {
        return this.productsService.create(payload);
    }

    //actualizar
    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
        return this.productsService.update(id, payload);
    }

    //eliminar
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.productsService.delete(id);
    }
}
