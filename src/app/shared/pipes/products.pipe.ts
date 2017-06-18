import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from '../../module/products/products-list/products-list.component';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(products: IProduct[], filterText: string): IProduct[] {

    return products.filter(product =>{
      return product.productName.indexOf(filterText) > -1;
    })
  }

}
