import { ErrorMessage } from '../ngx-form-error.config';

/**
 * Interface for the template context.
 */
export interface ErrorTemplateContext {
  errors: {
    failedValidation: string,
    message: ErrorMessage,
  }[];
}
