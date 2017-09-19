# Angular Form Error
[![Build Status][travis-badge]][travis-badge-url]
[travis-badge]: https://travis-ci.org/mmmichl/ngx-form-error.svg?branch=master
[travis-badge-url]: https://travis-ci.org/mmmichl/ngx-form-error

An Angular library to display form error messages effortless and consistently.

Features:
- consistent error messages
- small markup
- change messages to your liking

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
    FormErrorModule.forRoot() // import FormErrorModule
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
import { ErrorMessagesService } from 'ngx-form-error';

@Component({
  selector: 'app-form',
  template: `...`
})
export class AppFormComponent {
  constructor(errorMessages: ErrorMessagesService) {
    this.errorMessages.updateMessages({
      required: 'Custom required message',
    });
  }
}
```


## Contribution

*Before committing*, ensure following command passes:

- `npm run commit-check`

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint
- `npm run clean` to clean
- `npm run integration` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

If you need to debug the integration app, please check `./integration/README.md`.



based on [Angular QuickStart Lib](https://github.com/filipesilva/angular-quickstart-lib)
