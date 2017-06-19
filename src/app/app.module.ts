import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from './shared/models/product.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './module/layout/header/header.component';
import { FooterComponent } from './module/layout/footer/footer.component';
import { ProductsListComponent } from './module/products/products-list/products-list.component';
import { ReverswordPipe } from './shared/pipes/reversword.pipe';
import { ProductsPipe } from './shared/pipes/products.pipe';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsListComponent,
    ReverswordPipe,
    ProductsPipe,
    CurrencyPipe,
    StarRatingComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
