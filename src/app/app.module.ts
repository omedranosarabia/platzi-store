import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Se importa el componente ProductComponent
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';

<<<<<<< HEAD
// Array de declaración de Angular
=======

>>>>>>> master
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
