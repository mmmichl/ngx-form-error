import { ErrorTemplateContext } from './template/error-template.context';
import { Injectable, TemplateRef } from '@angular/core';

export type ErrorMessage = string;
export interface FormErrorMessages {
  [index: string]: ErrorMessage | ((errors: any) => ErrorMessage);
}

@Injectable({
  providedIn: 'root'
})
export class NgxFormErrorConfig {
  private template: TemplateRef<ErrorTemplateContext>;
  private errorMessages: FormErrorMessages = {
    min: (context) => {
      return `This value must be bigger than ${context.min}.`;
    },
    max: (context) => {
      return `This value must be smaller than ${context.max}.`;
    },
    required: 'This is required.',
    requiredtrue: 'This must be true.',
    email: 'This must be a valid e-mail address.',
    minlength: (context) => {
      return `This field requires at least ${context.requiredLength} characters.`;
    },
    maxlength: (context) => {
      return `This field must be shorter than ${context.requiredLength} characters.`;
    },
    pattern: 'This field contains an invalid format.',
  };

  constructor() { }

  getMessage(validator: string, context: any): ErrorMessage {
    const message = this.errorMessages[validator];
    if (!message) {
      console.warn('[ngx-form-error] could not find message for: ' + validator);
      return 'Error';
    }

    if (message instanceof Function) {
      return message(context);
    }
    return message;
  }

  /**
   * Updates the error messages with the provided messages.
   * Not occuring validations will be kept untouched
   */
  updateMessages(newValidationMessages: FormErrorMessages): void {
    this.errorMessages = {
      ...this.errorMessages,
      ...newValidationMessages,
    };
  }

  setTemplate(template: TemplateRef<ErrorTemplateContext>) {
    this.template = template;
  }

  getTemplate(): TemplateRef<ErrorTemplateContext> {
    return this.template;
  }
}
