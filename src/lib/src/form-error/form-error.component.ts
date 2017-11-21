import { ErrorTemplateContext } from './template/error-template.context';
import { FormErrorConfig } from './form-error.config';
import { FormControl } from '@angular/forms';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-form-error',
  template: `
    <div *ngIf="control?.touched && control?.invalid" class="error">
      <ng-template [ngTemplateOutlet]="getTemplate() || default" [ngTemplateOutletContext]="getContext()"></ng-template>
    </div>

    <ng-template #default let-errors="errors">
      <div *ngFor="let error of errors">{{error.message}}</div>
    </ng-template>
  `
})
export class FormErrorComponent {
  @Input() control: FormControl;
  @Input() template: TemplateRef<ErrorTemplateContext>;

  constructor(private formErrorConfig: FormErrorConfig) {}

  getContext(): ErrorTemplateContext {
    if (!this.control || !this.control.errors) {
      return {errors: []};
    }

    return {errors: Object.keys(this.control.errors).map(validation => ({
      failedValidation: validation,
      message: this.getMessage(validation, this.control.errors[validation]),
    }))};
  }

  getMessage(error: string, context: any): string {
    return this.formErrorConfig.getMessage(error, context);
  }

  getTemplate(): TemplateRef<ErrorTemplateContext> {
    return this.template || this.formErrorConfig.getTemplate();
  }
}
