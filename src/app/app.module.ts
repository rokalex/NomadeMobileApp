import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './module/layout/header/header.component';
import { FooterComponent } from './module/layout/footer/footer.component';
import { BodyComponent } from './module/layout/body/body.component';
import { ProductsListComponent } from './module/products/products-list/products-list.component';
import { ReverswordPipe } from './shared/pipes/reversword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProductsListComponent,
    ReverswordPipe
  ],
  imports: [
    MaterializeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
