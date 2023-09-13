import { Component } from '@angular/core';
import { FormInputFormat } from '../form-template/IForm';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent {
  constructor(private fb: FormBuilder) {}

  formItems: FormInputFormat[] = [
    {
      label: 'ID',
      type: 'text',
      varName: 'id',
    },
    {
      label: 'First Name',
      type: 'text',
      varName: 'firstName',
    },
    {
      label: 'Last Name',
      type: 'text',
      varName: 'lastName',
    },
    {
      label: 'Birth Date',
      type: 'date',
      varName: 'birthDate',
    },
    {
      label: 'Course',
      type: 'text',
      varName: 'course',
    },
  ];

  title = 'Update';

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    course: ['', Validators.required],
  });
}
