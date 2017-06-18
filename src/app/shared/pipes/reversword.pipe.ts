import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversword'
})
export class ReverswordPipe implements PipeTransform {

  transform(value: string): string {
    return value.split("").reverse().join("");
  }

}
