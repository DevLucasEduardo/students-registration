import { Component } from '@angular/core';
import { FormFormat, FormInputFormat } from '../form-template/IForm';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-read',
  templateUrl: './form-read.component.html',
  styleUrls: ['./form-read.component.css'],
})
export class FormReadComponent {
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

  title = 'Read';

  form = this.fb.group({
    id: ['', Validators.required],
    firstName: [{ value: '', disabled: true }, Validators.required],
    lastName: [{ value: '', disabled: true }, Validators.required],
    birthDate: [{ value: '', disabled: true }, Validators.required],
    course: [{ value: '', disabled: true }, Validators.required],
  });
}
