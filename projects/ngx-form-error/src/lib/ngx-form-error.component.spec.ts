import { NgxFormErrorConfig } from './ngx-form-error.config';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

import { NgxFormErrorComponent } from './ngx-form-error.component';


describe('NgxFormErrorComponent', () => {
  let comp: NgxFormErrorComponent;
  let fixture: ComponentFixture<NgxFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxFormErrorComponent],
       providers: [NgxFormErrorConfig],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormErrorComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should show error if the control is touched and is invalid', () => {
    comp.control = {
      touched: true,
      invalid: true,
      errors: {required: true} as ValidationErrors
    } as FormControl;
    fixture.detectChanges();

    const errDiv = fixture.debugElement.query(By.css('div'));
    const errText = errDiv.nativeElement.innerText;
    expect(errText.length).toBeGreaterThan(10, 'should have long enough error text set');
  });

  it('should not show an error if the control is not touched', () => {
    comp.control = {
      touched: false,
      invalid: true,
    } as FormControl;
    fixture.detectChanges();

    const errDiv = fixture.debugElement.query(By.css('div'));
    expect(errDiv).toBeNull('should not have error div present');
  });

  it('should not show an error if the control is valid', () => {
    comp.control = {
      touched: true,
      invalid: false,
    } as FormControl;
    fixture.detectChanges();

    const errDiv = fixture.debugElement.query(By.css('div'));
    expect(errDiv).toBeNull('should not have error div present');
  });

  describe('getContext', () => {
    it('should return empty error array if control is null', () => {
      expect(new NgxFormErrorComponent(null).getContext()).toEqual({errors: []});
    });
  });
});
