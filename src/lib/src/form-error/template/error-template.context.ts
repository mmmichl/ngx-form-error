import { ErrorMessage } from '../error-form.config';

/**
 * Interface for the template context.
 */
export interface ErrorTemplateContext {
  errors: {
    failedValidation: string,
    message: ErrorMessage,
  }[];
}
