import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.service';

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
