import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
     { path: ':id', component: ProductDetailComponent },
     { path: '', component: ProductsListComponent },
     { path: '**', redirectTo: '' }
]
