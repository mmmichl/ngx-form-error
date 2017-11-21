import { TestBed, inject } from '@angular/core/testing';

import { FormErrorConfig } from './form-error.config';

describe('FormErrorConfig', () => {
  let formErrorConfig: FormErrorConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormErrorConfig]
    });

    formErrorConfig = TestBed.get(FormErrorConfig);
  });

  it('should be created', inject([FormErrorConfig], (service: FormErrorConfig) => {
    expect(service).toBeTruthy();
  }));

  it('should have default required error message set', () => {
    expect(formErrorConfig.getMessage('required', {})).toBeDefined();
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
