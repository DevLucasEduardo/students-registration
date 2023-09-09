import { Component, Input } from '@angular/core';
import {
  FormCreateFormat,
  FormReadFormat,
  FormUpdateFormat,
  FormDeleteFormat,
} from './IForm';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  @Input() formItems!: Map<string, string>;
  @Input() title!: string;

  sendFormsInfo() {
    if (this.title === 'Create') {
      const formsInfo: FormCreateFormat = {
        firstName: 'Lucas',
        lastName: 'Eduardo',
        birthDate: new Date('1998-01-17'),
        course: 'Ads',
      };
      console.log(formsInfo);
    }
  }
}
