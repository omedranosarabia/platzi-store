import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Array de productos

  // Las iteraciones sólo pueden ser hechas sobre arrays
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/1.jpg',
      title: 'Playera 1',
      price: 250,
      description: 'Esta es la playera número 1'
    },
    {
      id: '2',
      image: 'assets/images/2.jpg',
      title: 'Playera 2',
      price: 350,
      description: 'Esta es la playera número 2'
    },
    {
      id: '3',
      image: 'assets/images/3.jpg',
      title: 'Playera 3',
      price: 230,
      description: 'Esta es la playera número 3'
    },
    {
      id: '4',
      image: 'assets/images/4.jpg',
      title: 'Playera 4',
      price: 235,
      description: 'Esta es la playera número 4'
    },
    {
      id: '5',
      image: 'assets/images/5.jpg',
      title: 'Playera 5',
      price: 320,
      description: 'Esta es la playera número 5'
    }

  ];

  constructor() { }

  // Método para obtener todos los productos
  getAllProducts(): object {
    return this.products;
  }

  // Método para obtener un producto específico con base en su ID
  getProduct(id: string): Product {
    return this.products.find(item => id === item.id);

   
  }
}
