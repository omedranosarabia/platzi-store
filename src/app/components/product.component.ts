import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Proudct } from '../product.model';

@Component({

    selector: 'app-product',
    templateUrl: './product.component.html'

})
export class ProductComponent {

    // El componenete recibe una propiedad desde otro componente
    @Input() product: Proudct;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('Añadir al carrito');
        this.productClicked.emit(this.product.id);
    }

}