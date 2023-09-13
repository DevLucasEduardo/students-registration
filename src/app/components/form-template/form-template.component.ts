import { Component, Input, afterRender } from '@angular/core';
import { FormInputFormat } from './IForm';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.form.status === 'VALID') {
      console.log(this.form.get('firstName')?.value);
      this.isSubmitted = true;
      this.form.reset();
    } else this.isSubmitted = false;
  }
}
