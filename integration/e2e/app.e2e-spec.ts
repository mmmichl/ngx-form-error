import { browser, element, by } from 'protractor';
import { AppPO } from './app.po';

describe('Form Error E2E Tests', function () {
  const page = new AppPO();

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });

  it('should initially not display errors', () => {
    expect(page.reaRequiredInputErr.getText()).toBe('', 'reqired reactive input error should not display a text');
    expect(page.tplRequiredInputErr.getText()).toBe('', 'reqired template input error should not display a text');
  });

  describe('reactive', () => {
    it('should display errors after input interaction', () => {
      page.reaRequiredInput.click();
      page.container.click();
      expect(page.reaRequiredInputErr.getText()).toBe('This is required.');
    });

    it('should not diplay an error for valid input', () => {
      page.reaRequiredInput.sendKeys('a');
      page.container.click();
      expect(page.reaRequiredInputErr.getText()).toBe('', 'reqired input error should not display a text');
    });
  });

  describe('template', () => {
    it('should display errors after input interaction', () => {
      page.tplRequiredInput.click();
      page.container.click();
      expect(page.tplRequiredInputErr.getText()).toBe('This is required.');
    });

    it('should not diplay an error for valid input', () => {
      page.tplRequiredInput.sendKeys('a');
      page.container.click();
      expect(page.tplRequiredInputErr.getText()).toBe('', 'reqired input error should not display a text');
    });
  });
});
