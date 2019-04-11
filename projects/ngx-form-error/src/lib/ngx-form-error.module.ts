import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxFormErrorComponent } from './ngx-form-error.component';
import { CommonModule } from '@angular/common';
import { NgxFormErrorConfig } from './ngx-form-error.config';

@NgModule({
  declarations: [NgxFormErrorComponent],
  imports: [
    CommonModule,
  ],
  exports: [NgxFormErrorComponent]
})
export class NgxFormErrorModule { }
