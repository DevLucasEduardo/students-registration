import { Component } from '@angular/core';
import { FormInputFormat } from '../form-template/IForm';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent {
  constructor(private fb: FormBuilder) {}

  formItems: FormInputFormat[] = [
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

  title = 'Create';

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    course: ['', Validators.required],
  });
}
