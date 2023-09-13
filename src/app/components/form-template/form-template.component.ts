import { Component, Input } from '@angular/core';
import { FormInputFormat } from './IForm';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  @Input() formItems!: FormInputFormat[];
  @Input() title!: string;
  @Input() form!: any;

  constructor(private fb: FormBuilder) {}
}
