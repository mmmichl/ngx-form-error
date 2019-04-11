import { TestBed, inject } from '@angular/core/testing';

import { NgxFormErrorConfig } from './ngx-form-error.config';

describe('NgxFormErrorConfig', () => {
  let formErrorConfig: NgxFormErrorConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFormErrorConfig]
    });

    formErrorConfig = TestBed.get(NgxFormErrorConfig);
  });

  it('should be created', inject([NgxFormErrorConfig], (service: NgxFormErrorConfig) => {
    expect(service).toBeTruthy();
  }));

  it('should have default required error message set', () => {
    expect(formErrorConfig.getMessage('required', {})).toBeDefined();
  });

  it('should support functions as error messages', () => {
    expect(formErrorConfig.getMessage('minlength', {minlength: 2})).toBeDefined();
  });

  describe('update messages', () => {
    it('should update mentioned messages and keep remaining messages untouched', () => {
      const origRequiredMsg = formErrorConfig.getMessage('required', {});
      formErrorConfig.updateMessages({
        newError: 'new error text',
      });

      expect(formErrorConfig.getMessage('required', {})).toEqual(origRequiredMsg, '');
      expect(formErrorConfig.getMessage('newError', {})).toEqual('new error text');
    });
  });
});
//
