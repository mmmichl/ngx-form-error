import { ErrorTemplateContext } from './template/error-template.context';
import { Injectable, TemplateRef } from '@angular/core';

export type ErrorMessage = string;
export interface FormErrorMessages {
  [index: string]: ErrorMessage;
}

@Injectable()
export class FormErrorConfig {
  private template: TemplateRef<ErrorTemplateContext>;
  private errorMessages: FormErrorMessages = {
    min: 'This value is smaller than allowed.',
    max: 'This value is bigger than allowed.',
    required: 'This is required.',
    requiredtrue: 'This must be true.',
    email: 'This must be a valid e-mail address.',
    minlength: 'This text is too short.',
    maxlength: 'This text is too long.',
    pattern: 'This field contains an invalid format.',
  };

  constructor() { }

  getMessage(validator: string): ErrorMessage {
    const message = this.errorMessages[validator];
    if (!message) {
      console.warn('[ngx-form-error] could not find message for: ' + validator);
      return 'Error';
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
    }
  }

  setTemplate(template: TemplateRef<ErrorTemplateContext>) {
    this.template = template;
  }

  getTemplate(): TemplateRef<ErrorTemplateContext> {
    return this.template;
  }
}
