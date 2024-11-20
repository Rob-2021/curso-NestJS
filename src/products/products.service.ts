import { Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/products.dtos';

@Injectable()
export class ProductsService {

    private counterId = 1;
    private products: Product[] = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Esto es un producto 1',
            price: 1000,
            stock: 2
        }
    ]

    //metodo para encontrar todos los productos
    findAll() {
        return this.products;
    }

    //metodo para encontrar un producto
    findOne(id: number) {
        const product = this.products.find((item) => item.id === id);
        if (!product) {
            //throw new Error(`Product con id ${id} no encontrado`);
            throw new NotFoundException(`Product con id ${id} no encontrado`);
        }
        return product;
    }

    //metodo para crear un producto
    create(payload: CreateProductDto) {
        this.counterId = this.counterId + 1;

        const newProduct = {
            id: this.counterId,
            ...payload
        };
        this.products.push(newProduct);
        return newProduct;
    }

    // Método para actualizar un producto
    update(id: number, payload: UpdateProductDto) {
        const productId = typeof id === 'string' ? parseInt(id, 10) : id;
        const index = this.products.findIndex((item) => item.id === productId);
        // console.log('id', id, 'payload', payload);
        // const index = this.products.findIndex((item) => item.id == id);
        // console.log('index', index);
        if (index === -1) {
            throw new Error(`Product con id ${id} no encontrado`);
        }
        this.products[index] = {
            ...this.products[index],
            ...payload,
        };
        return this.products[index];
    }

    // Método para eliminar un producto
    delete(id: number) {
        const productId = typeof id === 'string' ? parseInt(id, 10) : id;
        const index = this.products.findIndex((item) => item.id === productId);
        // const index = this.products.findIndex((item) => item.id == id);
        if (index === -1) {
            throw new Error(`Product con id ${id} no encontrado`);
        }
        const product = this.products[index];
        this.products = this.products.filter((item) => item.id !== productId);
        return product;
    }
}
