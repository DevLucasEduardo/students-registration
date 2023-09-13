import { Component } from '@angular/core';
import { FormInputFormat } from '../form-template/IForm';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css'],
})
export class FormDeleteComponent {
  constructor(private fb: FormBuilder) {}

  formItems: FormInputFormat[] = [
    {
      label: 'ID',
      type: 'text',
      varName: 'id',
    },
  ];
  title = 'Delete';

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    course: ['', Validators.required],
  });
}
