import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'integration-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  exampleForm: FormGroup;
  model = {
    reqiredField: '',
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      req: ['', Validators.required],
      minLen: ['', Validators.minLength(2)],
      minLenNum: ['', [Validators.minLength(2), Validators.pattern(/^\d*$/)]]
    });
  }

  formSubmit(): void {
  }
}
