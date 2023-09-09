import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openMenu: boolean = false;
  title = 'StudentRegistration';
  formsData: string[] = [];

  onMenuEvent() {
    this.openMenu = !this.openMenu;
  }
}
