import { Component } from '@angular/core';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.css'],
})
export class FormDeleteComponent {
  formItems: Map<string, string> = new Map([['ID', 'text']]);
  title = 'Delete';
}
