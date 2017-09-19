import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { FormErrorComponent } from './form-error/form-error.component';
import { ErrorMessagesService } from './form-error/error-messages.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FormErrorComponent,
  ],
  exports: [
    FormErrorComponent,
  ]
})
export class FormErrorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormErrorModule,
      providers: [[
        ErrorMessagesService
      ]]
    };
  }
}
