# Angular Form Error

[![Build Status](https://travis-ci.org/mmmichl/ngx-form-error.svg?branch=master)](https://travis-ci.org/mmmichl/ngx-form-error)

An Angular library to display form error messages effortless and consistently.

Features:

- consistent error messages
- small markup
- change messages to your liking
- variable messages: include specifics from validator (e.g. min lenght)

## Install

```bash
npm install ngx-form-error
```

## Setup

Import library in your root module

```ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormErrorModule } from 'ngx-form-error';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    NgxFormErrorModule   // <- import
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
```

## Use

Add the `ngx-form-error` directive where you want so have the errors displayed and set the control

```html
<form [formGroup]="exampleForm" novalidate (ngSubmit)="formSubmit()">
  <div class="form-input">
    <label for="required-input">Required input</label>
    <input formControlName="req" type="text" id="required-input">
    <ngx-form-error [control]="exampleForm.get('req')"></ngx-form-error>
  </div>
</form>
```

or in model driven forms:

```html
<form novalidate (ngSubmit)="formSubmit()">
  <div class="form-input">
    <label for="model-required-input" class="required">Required input</label>
    <input type="text" id="model-required-input" name="model-required"
            [(ngModel)]="model.reqiredField" #reqiredModel="ngModel"
            required>
    <ngx-form-error [control]="reqiredModel.control"></ngx-form-error>
  </div>
</form>
```

To add messages for custom validations or change/translate [build in messages](https://github.com/mmmichl/ngx-form-error/blob/master/projects/ngx-form-error/src/lib/ngx-form-error.config.ts), use the `NgxFormErrorConfig` service:

```ts
import { Component } from '@angular/core';
import { NgxFormErrorConfig } from 'ngx-form-error';

@Component({
  selector: 'app-form',
  template: `...`
})
export class AppFormComponent {
  constructor(errorFormConfig: NgxFormErrorConfig) {
    errorFormConfig.updateMessages({
      required: 'Custom required message',
      minlength: (context) => `Custom message with context: required minimum is ${context.requiredLength} characters.`,
    });
  }
}
```

Set your own template per instance:

```html
<form [formGroup]="exampleForm" novalidate (ngSubmit)="formSubmit()">
  <div class="form-input">
    <label for="required-input">Required input</label>
    <input formControlName="req" type="text" id="required-input">
    <ngx-form-error [control]="exampleForm.get('req')" [template]="custom"></ngx-form-error>
  </div>
</form>

<ng-template #custom let-errors="errors">
  <div *ngFor="let error of errors" class="error-message">
    custom error template: {{error.message}}
  </div>
</ng-template>
```

or set it globaly via `errorFormConfig.setTemplate(tpl)` e.g. in your root component:

```ts
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgxFormErrorConfig } from 'ngx-form-error';
import { ErrorTemplateContext } from 'ngx-form-error/lib/template/error-template.context';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

    <ng-template #defFrmErrorTpl let-errors="errors">
      <div *ngFor="let error of errors" class="error-message">go nuts: {{error.message}}</div>
    </ng-template>
  `
})
export class AppComponent implements OnInit{
  @ViewChild('defFrmErrorTpl', {static: false}) frmErrorTpl: TemplateRef<ErrorTemplateContext>;

  constructor(private errorFormConfig: NgxFormErrorConfig) {
  }

  ngAfterViewInit(): void {
    this.errorFormConfig.setTemplate(this.frmErrorTpl);
  }
}```
