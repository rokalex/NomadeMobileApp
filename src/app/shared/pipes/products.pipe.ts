import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.service';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(products: IProduct[], filterText: string): IProduct[] {
    if (!Array.isArray(products)){
      return products;
    }
    return products.filter(product =>{
      return product.productName.indexOf(filterText) > -1;
    })
  }

}
