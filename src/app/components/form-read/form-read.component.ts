import { Component } from '@angular/core';

@Component({
  selector: 'app-form-read',
  templateUrl: './form-read.component.html',
  styleUrls: ['./form-read.component.css'],
})
export class FormReadComponent {
  formItems: Map<string, string> = new Map([
    ['ID', 'text'],
    ['First Name', 'text'],
    ['Last Name', 'text'],
    ['Birth Date', 'date'],
    ['Course', 'text'],
  ]);

  title = 'Read';
}
