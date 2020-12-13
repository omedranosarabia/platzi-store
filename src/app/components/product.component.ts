// Se importa el decorador Component

import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

// El decorador indica que rol va a cumplir esta clase
// En este caso, al ser un componente se coloca el decorador "Component"

@Component({

    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})

// Para que cualquier elemento en Angular pueda utilizar este componente
// se coloca la palabra "export" antes de "class"
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;

    @Output() eventoAgregarCarrito = new EventEmitter<any>();

    // Aquí es donde se contruye el componente
    constructor() {

        console.log('1. constructor');

    }

    // Ocurre cuando se detectan cambios
    // Es nativo de Angular
    // ngOnChanges(changes: SimpleChanges){

    //     console.log('2. ngOnChanges');
    //     console.log(changes);

    // }

    // Ocurre cuando el componente está listo y su interfaz está cargada
    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    // Detecta cambios ofreciendo la posibilidad de realizar una configuración
    // específica
    ngDoCheck(): void {

        console.log('4. ngDoCheck');

    }

    // Se ejecuta cuando un componente se elimna
    ngOnDestroy(): void {

        console.log('OnDestroy');
    }

    addCart(): void {
        console.log('Agregado al carrito');
        this.eventoAgregarCarrito.emit(this.product.id);

    }

}
