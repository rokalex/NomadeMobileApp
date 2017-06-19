import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from './../../../shared/models/product.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public listfilter : string = '';
  public displayImg : boolean = true;
  products: Observable<IProduct[]>;

  myPublicMethod(){
    this.displayImg = !this.displayImg;
    //toogle le booléen
  }


  constructor(private productService: ProductService) { }

  ngOnInit() {
      console.log('Im ngOnInit');
//       this.productService.getProducts()
//         .subscribe(
//           products => this.products = products,
//           error => console.error(error)
//         )
      this.products = this.productService.getProducts();
   }

}
