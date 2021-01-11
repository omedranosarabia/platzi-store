import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Se importa el componente ProductComponent
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

// Importación del shared module
import { SharedModule } from './shared/shared.module';

// Importación del core module
import { CoreModule } from './core/core.module';

// Array de declaración de Angular
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    DemoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
