import { Component, Input } from '@angular/core';
import { FormFormat, FormInputFormat } from './IForm';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  @Input() formItems!: FormInputFormat[];
  @Input() title!: string;
  @Input() form!: FormGroup;

  isSubmitted: boolean = true;
  formData: FormFormat = {};
  onSubmit(): void {
    if (this.form.valid) {
      if (
        this.title === 'Read' ||
        this.title === 'Delete' ||
        this.title === 'Update'
      ) {
        this.formData.id = this.form.get('id')?.value;
      }
      if (this.title === 'Create' || this.title === 'Update') {
        this.formData.firstName = this.form.get('firstName')?.value;
        this.formData.lastName = this.form.get('lastName')?.value;
        this.formData.birthDate = this.form.get('birthDate')?.value;
        this.formData.course = this.form.get('course')?.value;
      }
      this.isSubmitted = true;
      this.form.reset();
    } else this.isSubmitted = false;
  }
}
