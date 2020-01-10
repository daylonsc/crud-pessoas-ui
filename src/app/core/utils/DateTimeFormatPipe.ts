import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const datePipe = new DatePipe('en-Us');
    const dat = datePipe.transform(value, 'dd/MM/yyyy');
    const dia = String(Number(dat.substring(0, 2)) +1);
    const mes = dat.substring(3, 5);
    const ano = dat.substring(6, 10);
    return dia.concat("/").concat(mes).concat("/").concat(ano);
  }
}
