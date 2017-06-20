import { ProductIdGuard } from './../../shared/guards/product-id.guard';
import { ProductResolve } from './../../shared/resolves/product.resolve';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
 import { Routes } from '@angular/router';

 export const PRODUCT_ROUTES: Routes = [

    {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { // Here the resolves
            product: ProductResolve // Our product resolve (product name can be any string {myResolveName: MyResolveClass})
        },
        canActivate: [ProductIdGuard] // Here the list of canActivate guard
    },
     { path: '', component: ProductsListComponent },
     { path: '**', redirectTo: '' }
 ]
