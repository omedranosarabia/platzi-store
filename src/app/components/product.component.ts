<<<<<<< HEAD
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
=======
// Los decoradores ofrecen un contexto a los artefactos de Angular
// Los decoradores definen el rol que va a cumplir la clase
// Para este caso se importa el "Component" debido a que esta clase es un componente
import { Component } from '@angular/core';

// Importación del modelo 'Product'
import { Product } from '../product.model';
>>>>>>> master

// Metadata del componente
@Component({

    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']

})

<<<<<<< HEAD
// Para que cualquier elemento en Angular pueda utilizar este componente
// se coloca la palabra "export" antes de "class"
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;

    @Output() eventoAgregarCarrito = new EventEmitter<any>();

    today = new Date();
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

=======

// Se define la clase y se coloca la palabra "export" para que esta pueda ser
// utilizada desde cualquier parte de la aplicación
export class ProductComponent {

    product: Product = {
        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Playera 1',
        price: 250,
        description: 'Esta es la playera número 1'
>>>>>>> master
    }

}
