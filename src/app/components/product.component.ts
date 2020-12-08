// Los decoradores ofrecen un contexto a los artefactos de Angular
// Los decoradores definen el rol que va a cumplir la clase
// Para este caso se importa el "Component" debido a que esta clase es un componente
import { Component } from '@angular/core';

// Importación del modelo 'Product'
import { Product } from '../product.model';

// Metadata del componente
@Component({

    selector: 'app-product',
    templateUrl: './product.component.html'

})


// Se define la clase y se coloca la palabra "export" para que esta pueda ser
// utilizada desde cualquier parte de la aplicación
export class ProductComponent {

    product: Product = {
        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Playera 1',
        price: 250,
        description: 'Esta es la playera número 1'
    }

}