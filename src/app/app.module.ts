//modules
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//services
import { ProductService } from './shared/models/product.service';
//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/layout/header/header.component';
import { FooterComponent } from './module/layout/footer/footer.component';
import { ProductsListComponent } from './module/products/products-list/products-list.component';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { ProductComponent } from './module/products/product.component';
import { WelcomeComponent } from './module/layout/welcome/welcome.component';
import { ProductDetailComponent } from './module/products/product-detail/product-detail.component';
//pipes
import { ReverswordPipe } from './shared/pipes/reversword.pipe';
import { ProductsPipe } from './shared/pipes/products.pipe';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
//router
import { APP_ROUTES } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
//guard resolver
import { ProductIdGuard } from './shared/guards/product-id.guard';
import { ProductResolve } from './shared/resolves/product.resolve';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    ReverswordPipe,
    ProductsPipe,
    CurrencyPipe,
    StarRatingComponent,
    ProductComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ProductService, ProductResolve, ProductIdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
