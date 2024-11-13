import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

    private counterId = 1;
    private products:Product[] = [
        {
            id: 1,
            name: 'Producto 1',
            description: 'Esto es un producto 1',
            price: 1000,
            stock: 2
        }
    ]

    //metodo para encontrar todos los productos
    findAll(){
        return this.products;
    }

    //metodo para encontrar un producto
    findOne(id:number){
        return this.products.find((item) => item.id === id);
    }

    //metodo para crear un producto
    create(payload:any){
        this.counterId = this.counterId + 1;

        const newProduct = {
            id: this.counterId,
            ...payload
        };
        this.products.push(newProduct);
        return newProduct;
    }

    // //metodo para actualizar un producto
    // update(id:number, payload:any){
    //     const index = this.products.findIndex((item) => item.id === id);
    //     if(index === -1){
    //         return null;
    //     }
    //     this.products[index] = {
    //         ...this.products[index],
    //         ...payload
    //     };
    //     return this.products[index];
    // }

    // //metodo para eliminar un producto
    // delete(id:number){
    //     const index = this.products.findIndex((item) => item.id === id);
    //     if(index === -1){
    //         return null;
    //     }
    //     const product = this.products[index];
    //     this.products = this.products.filter((item) => item.id !== id);
    //     return product;
    // }

    update(id: number, payload: any) {
        const index = this.products.findIndex((item) => item.id === id);
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
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new Error(`Product con id ${id} no encontrado`);
        }
        const product = this.products[index];
        this.products = this.products.filter((item) => item.id !== id);
        return product;
    }
}
