import { Component } from '@angular/core';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css'],
})
export class FormDeleteComponent {
  formItems: string[] = [
    'ID',
    'First Name',
    'Last Name',
    'Birth Date',
    'Course',
  ];
  buttonTitle = 'Delete';
}
