import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxFormErrorModule } from 'ngx-form-error';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgxFormErrorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
