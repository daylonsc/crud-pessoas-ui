import {DatePipe} from '@angular/common';
import * as moment from 'moment';
import {Pipe, PipeTransform} from "@angular/core";


export function replaceCpfCnpj(cpfCnpj: String): string {
  const chars = {'.': '', '-': '', '/': ''};
  return cpfCnpj.replace(/[abc]/g, m => chars[m]);
}

export function formatDateToBr(date: Date) {
  const datePipe = new DatePipe('en-Us');
  return datePipe.transform(date, 'dd/MM/yyyy');
}

export function formatDateToUsa(date: string): Date {
  const dia = Number(date.substring(0, 2));
  const mes = Number(date.substring(2, 4));
  const ano = Number(date.substring(4, 8));

  return new Date(ano, mes -1, dia);
}
