import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencyType: string): string {
    return `${value.toString()} ${currencyType}`;;
  }

}
