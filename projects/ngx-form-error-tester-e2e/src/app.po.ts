/**
 * Page Object file for the e2e test
 */


import { element, by } from 'protractor';

export class AppPO {
  container = element(by.css('app-root'));
  reactiveForm = this.container.element(by.id('reactive-form'));
  reaRequiredInput = this.reactiveForm.element(by.id('required-input'));
  reaRequiredInputErr = this.reactiveForm.$('#required-input-error');

  templateForm = this.container.element(by.id('template-form'));
  tplRequiredInput = this.templateForm.element(by.id('model-required-input'));
  tplRequiredInputErr = this.templateForm.$('#model-required-input-error');
}
