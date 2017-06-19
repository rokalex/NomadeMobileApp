import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from './../../../shared/models/product.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public listfilter : string = '';
  public displayImg = true;

  myPublicMethod(){
    this.displayImg = !this.displayImg;
    //toogle le booléen
  }

  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log('toto')
    this.products = this.productService.getProducts()
  }

}
