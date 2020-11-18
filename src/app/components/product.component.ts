// Se importa el decorador Component

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

// El decorador indica que rol va a cumplir esta clase
// En este caso, al ser un componente se coloca el decorador "Component"

@Component({

    selector: 'app-product',
    templateUrl: './product.component.html'

})

// Para que cualquier elemento en Angular pueda utilizar este componente 
// se coloca la palabra "export" antes de "class"
export class ProductComponent {

    product: Product = {
        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Playera 1',
        price: 250,
        description: 'Esta es la playera número 1'
    }

}