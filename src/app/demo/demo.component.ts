import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  number = '1';
  nombre = 'Omar';

  power = 10;
  // Array de datos utilizado para el ejemplo de ngFor
  items = ['Elon', 'Tyrell', 'Eliot'];

  constructor() { }

  ngOnInit(): void {
  }

  // Método para agregar un nuevo nombre a la lista items
  addItem(): void {
    this.items.push('Nuevo nombre');
  }

  // Se define una función para eliminar un nombre de la lista,
  // tipando el parámetro de nombre index como tipo number
  deleteItem(index: number): void {

    console.log('Se borró ' + index);

    this.items.splice(index, 1);

  }
}
