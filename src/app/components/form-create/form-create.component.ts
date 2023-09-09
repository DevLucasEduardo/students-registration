import { Component } from '@angular/core';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent {
  formItems: string[] = ['First Name', 'Last Name', 'Birth Date', 'Course'];
  buttonTitle = 'Create';
}