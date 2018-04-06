import { Pipe, PipeTransform } from '@angular/core';
import { memoize } from 'lodash';
@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
   return getVat(value)}
}

var getVat = memoize((value) => {
  return `${value} + ${(value * 0.23).toFixed(2)} VAT`
});
