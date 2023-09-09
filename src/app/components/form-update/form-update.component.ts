import { Component } from '@angular/core';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent {
  formItems: Map<string, string> = new Map([
    ['ID', 'text'],
    ['First Name', 'text'],
    ['Last Name', 'text'],
    ['Birth Date', 'date'],
    ['Course', 'text'],
  ]);
  title = 'Update';
}
