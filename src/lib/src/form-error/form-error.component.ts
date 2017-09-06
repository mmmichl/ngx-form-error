import { FORM_ERROR_MESSAGES, DI_ERROR_MESSAGE_OBJ } from './form-error-messages.value';
import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-form-error',
  template: `
    <div *ngIf="control?.touched && control?.invalid" class="error">
      <div *ngFor="let error of getErrors()">{{getMessage(error)}}</div>
    </div>
  `
})
export class FormErrorComponent {
  @Input() control: FormControl;

  getErrors() {
    if (!this.control || !this.control.errors) {
      return [];
    }

    return Object.keys(this.control.errors);
  }

  getMessage(error: string) {
    // TODO properly inject the error message object.
    return DI_ERROR_MESSAGE_OBJ[error];
  }
}
