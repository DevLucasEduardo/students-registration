import { Component } from '@angular/core';

@Component({
  selector: 'app-form-read',
  templateUrl: './form-read.component.html',
  styleUrls: ['./form-read.component.css'],
})
export class FormReadComponent {
  formItems: string[] = [
    'ID',
    'First Name',
    'Last Name',
    'Birth Date',
    'Course',
  ];
  buttonTitle = 'Read';
}
