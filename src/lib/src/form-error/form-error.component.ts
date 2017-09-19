import { ErrorMessagesService } from './error-messages.service';
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

  constructor(private errorMessages: ErrorMessagesService) {}

  getErrors() {
    if (!this.control || !this.control.errors) {
      return [];
    }

    return Object.keys(this.control.errors);
  }

  getMessage(error: string): string {
    return this.errorMessages.getMessage(error);
  }
}
