import { Component } from '@angular/core';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent {
  formItems: string[] = [
    'ID',
    'First Name',
    'Last Name',
    'Birth Date',
    'Course',
  ];
  buttonTitle = 'Update';
}
