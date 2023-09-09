import { Component } from '@angular/core';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
})
export class FormCreateComponent {
  formItems: Map<string, string> = new Map([
    ['First Name', 'text'],
    ['Last Name', 'text'],
    ['Birth Date', 'date'],
    ['Course', 'text'],
  ]);
  title = 'Create';
}
