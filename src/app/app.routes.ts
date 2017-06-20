import { PRODUCT_ROUTES } from './module/products/product.routes';
import { ProductComponent } from './module/products/product.component';
import { WelcomeComponent } from './module/layout/welcome/welcome.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
     { path: 'welcome', component: WelcomeComponent },
     { path: 'products', component: ProductComponent, children: PRODUCT_ROUTES },
     { path: '', redirectTo: '/welcome', pathMatch: 'full' },
     { path: '**', redirectTo: '/welcome' }
]
