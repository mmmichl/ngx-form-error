import { TestBed, inject } from '@angular/core/testing';

import { ErrorFormConfig } from './error-form.config';

describe('ErrorFormConfig', () => {
  let errorFormConfig: ErrorFormConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorFormConfig]
    });

    errorFormConfig = TestBed.get(ErrorFormConfig);
  });

  it('should be created', inject([ErrorFormConfig], (service: ErrorFormConfig) => {
    expect(service).toBeTruthy();
  }));

  it('should have default required error message set', () => {
    expect(errorFormConfig.getMessage('required')).toBeDefined();
  });

  describe('update messages', () => {
    it('should update mentioned messages and keep remaining messages untouched', () => {
      const origRequiredMsg = errorFormConfig.getMessage('required');
      errorFormConfig.updateMessages({
        newError: 'new error text',
      });

      expect(errorFormConfig.getMessage('required')).toEqual(origRequiredMsg, '');
      expect(errorFormConfig.getMessage('newError')).toEqual('new error text');
    });
  });
});
