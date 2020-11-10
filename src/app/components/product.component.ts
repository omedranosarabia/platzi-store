import { Component } from '@angular/core';

import { Proudct } from '../product.model';

@Component({

    selector: 'app-product',
    templateUrl: './product.component.html'

})
export class ProductComponent {

    product: Proudct = {

        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Playera 1',
        price: 10,
        description: 'Una gran playera'

    }

}