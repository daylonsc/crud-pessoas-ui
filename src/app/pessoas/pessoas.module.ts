import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoasRoutingModule} from './pessoas.routing';
import {AppCommonModule} from '../app.common.module';
import {HeaderBreadCrumbModule} from '../layout/header-breadcrumb/header-breadcrumb.module';
import {PessoasComponent} from './pessoas.component';
import {DialogModule} from 'primeng/dialog';
import {NgxMaskModule} from 'ngx-mask';
import {DateTimeFormatPipe} from "../core/utils/DateTimeFormatPipe";
import {InputMaskModule} from "primeng/inputmask";


@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    DialogModule,
    NgxMaskModule,
    InputMaskModule,
  ],
  declarations: [
    DateTimeFormatPipe,
    PessoasComponent
  ]
})
export class PessoasModule {
}
