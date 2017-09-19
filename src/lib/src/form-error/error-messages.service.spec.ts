import { TestBed, inject } from '@angular/core/testing';

import { ErrorMessagesService } from './error-messages.service';

describe('ErrorMessagesService', () => {
  let errorMessagesService: ErrorMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorMessagesService]
    });

    errorMessagesService = TestBed.get(ErrorMessagesService);
  });

  it('should be created', inject([ErrorMessagesService], (service: ErrorMessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should have default required error message set', () => {
    expect(errorMessagesService.getMessage('required')).toBeDefined();
  });

  describe('update messages', () => {
    it('should update mentioned messages and keep remaining messages untouched', () => {
      const origRequiredMsg = errorMessagesService.getMessage('required');
      errorMessagesService.updateMessages({
        newError: 'new error text',
      });

      expect(errorMessagesService.getMessage('required')).toEqual(origRequiredMsg, '');
      expect(errorMessagesService.getMessage('newError')).toEqual('new error text');
    });
  });
});
