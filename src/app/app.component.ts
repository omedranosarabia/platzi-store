import { Component } from '@angular/core';

import { Proudct } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  nombre = 'Elon Musk';
  numActual = '1';

  items = ['Elon', 'Tyrell', 'Eliot'];


  products: Proudct[] = [
    {
      id: '1',
      image: 'assets/images/1.jpg',
      title: 'Playera 1',
      price: 10,
      description: 'Una gran playera'
    },

    {
      id: '2',
      image: 'assets/images/2.jpg',
      title: 'Playera 2',
      price: 12,
      description: 'Otra gran playera'
    },

    {
      id: '3',
      image: 'assets/images/3.jpg',
      title: 'Playera 3',
      price: 14,
      description: 'Si, aquí tenemos buenas playeras'
    },

    {
      id: '4',
      image: 'assets/images/4.jpg',
      title: 'Playera 4',
      price: 16,
      description: 'Vaya playeras que hay aquí'
    },

    {
      id: '5',
      image: 'assets/images/5.jpg',
      title: 'Playera 5',
      price: 12,
      description: 'Pero mira nada más que buenas playeras'
    }
  ]

  addItem(){

    this.items.push('nuevoItem');
  }

  deleteItem(index: number){

    this.items.splice(index, 1);
  }

  clickProduct(id:number){

    console.log('product');
    console.log(id);

  }
}
