import {DatePipe} from '@angular/common';
import * as moment from 'moment';


export function replaceCpfCnpj(cpfCnpj: String): string {
  const chars = {'.': '', '-': '', '/': ''};
  return cpfCnpj.replace(/[abc]/g, m => chars[m]);
}

export function formatDateToBr(date: Date) {
  const datePipe = new DatePipe('en-Us');
  return datePipe.transform(date, 'dd/MM/yyyy');
}

export function formatDateToUsa(date: string): Date {
  const dia = date.substring(0, 2);
  const mes = date.substring(2, 4);
  const ano = date.substring(4, 8);
  return new Date(ano + '-' + mes + '-' + dia);
}

