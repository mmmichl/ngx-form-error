import { NgxFormErrorConfig, ErrorTemplateContext } from 'ngx-form-error';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Inject, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('defFrmErrorTpl')
  private defFrmErrorTpl: TemplateRef<ErrorTemplateContext>;

  exampleForm: FormGroup;
  model = {
    reqiredField: '',
  };
  customMsgCounter = 0;

  constructor(private fb: FormBuilder, private errorFormConfig: NgxFormErrorConfig) {
  }

  ngOnInit(): void {
    this.errorFormConfig.setTemplate(this.defFrmErrorTpl);

    this.exampleForm = this.fb.group({
      req: ['', Validators.required],
      minLen: ['', Validators.minLength(4)],
      minLenNum: ['', [Validators.minLength(4), Validators.pattern(/^\d*$/)]],
      template: ['', [Validators.minLength(4), Validators.pattern(/^\d*$/)]],
    });
  }

  formSubmit(): void {
    alert('Form submitted!');
  }

  toggleRequiredMsg() {
    this.customMsgCounter += 1;
    this.errorFormConfig.updateMessages({
      required: `Custom required message (${this.customMsgCounter})`,
    });
  }
}
