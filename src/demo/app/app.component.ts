import { ErrorMessagesService } from 'ngx-form-error';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  exampleForm: FormGroup;
  model = {
    reqiredField: '',
  };
  customMsgCounter = 0;

  constructor(private fb: FormBuilder, private errorMessages: ErrorMessagesService) {
  }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      req: ['', Validators.required],
      minLen: ['', Validators.minLength(2)],
      minLenNum: ['', [Validators.minLength(2), Validators.pattern(/^\d*$/)]]
    });
  }

  formSubmit(): void {
    alert('Form submitted!');
  }

  toggleRequiredMsg() {
    this.customMsgCounter += 1;
    this.errorMessages.updateMessages({
      required: `Custom required message (${this.customMsgCounter})`,
    });
  }
}
