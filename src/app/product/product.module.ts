import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// Importación del shared module
import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductComponent,
        ProductsComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule
    ],
})

export class ProductModule {

}
