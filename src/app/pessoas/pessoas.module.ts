import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoasRoutingModule} from './pessoas.routing';
import {AppCommonModule} from '../app.common.module';
import {HeaderBreadCrumbModule} from '../layout/header-breadcrumb/header-breadcrumb.module';
import {PessoasComponent} from './pessoas.component';
import {DialogModule} from 'primeng/dialog';
import {NgxMaskModule} from 'ngx-mask';


@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule,
    AppCommonModule,
    HeaderBreadCrumbModule,
    DialogModule,
    NgxMaskModule
  ],
  declarations: [
    PessoasComponent
  ]
})
export class PessoasModule {
}
