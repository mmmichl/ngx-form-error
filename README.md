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
import { FormErrorModule } from 'ngx-form-error';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    FormErrorModule   // import FormErrorModule
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

To add messages for custom validations or change build in messages, use the `ErrorMessagesService`

```ts
import { Component } from '@angular/core';
import { ErrorFormConfig } from 'ngx-form-error';

@Component({
  selector: 'app-form',
  template: `...`
})
export class AppFormComponent {
  constructor(errorFormConfig: ErrorFormConfig) {
    this.errorFormConfig.updateMessages({
      required: 'Custom required message',
      minlength: (context) => {
        return `Custom message with context: required minimum is ${context.requiredLength} characters.`;
      },
    });
  }
}
```

Set your own template

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
    {{error.message}}
  </div>
</ng-template>
```

or set it globaly via `errorFormConfig.setTemplate(tpl)`.


## Contribution

*Before committing*, ensure following command passes:

- `npm run commit-check`

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint
- `npm run e2e` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app
