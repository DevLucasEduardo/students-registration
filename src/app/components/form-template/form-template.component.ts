import { Component } from '@angular/core';
import { FormFormat } from './IForm';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  objForm!: FormFormat;

  formItems: string[] = [
    'ID',
    'First Name',
    'Last Name',
    'Birth Date',
    'Course',
  ];
}
