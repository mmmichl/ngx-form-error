import { Injectable } from '@angular/core';

export interface FormErrorMessages {
  [index: string]: string;
}

@Injectable()
export class ErrorMessagesService {
  errorMessages: FormErrorMessages = {
    min: 'This value is smaller than allowed.',
    max: 'This value is bigger than allowed.',
    required: 'This is required.',
    requiredTrue: 'This must be true.',
    email: 'This must be a valid e-mail address.',
    minLength: 'This text is too short.',
    maxLength: 'This text is too long.',
    pattern: 'This field contains an invalid format.',
  };

  constructor() { }

  getMessage(validator: string): string {
    return this.errorMessages[validator];
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
}
