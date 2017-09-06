import { InjectionToken } from '@angular/core';

export interface FormErrorMessages {
  [index: string]: string;
}
// TODO this needs to get properly registered in the module
export let FORM_ERROR_MESSAGES = new InjectionToken<FormErrorMessages>('ngxFormError.messages');

export const DI_ERROR_MESSAGE_OBJ: FormErrorMessages = {
  required: 'This field is required.',
};
