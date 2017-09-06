/**
 * Page Object file for the e2e test
 */


import { element, by } from 'protractor';

export class AppPO {
  container = element(by.css('integration-app'));
  reactiveForm = this.container.element(by.id('reactive-form'));
  reaRequiredInput = this.reactiveForm.element(by.id('required-input'));
  reaRequiredInputErr = this.reactiveForm.$('#required-input-error');

  templateForm = this.container.element(by.id('template-form'));
  tplRequiredInput = this.templateForm.element(by.id('tpl-required-input'));
  tplRequiredInputErr = this.templateForm.$('#tpl-required-input-error');
}
