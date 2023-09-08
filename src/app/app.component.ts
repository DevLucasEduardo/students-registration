import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openMenu: boolean = true;
  title = 'StudentRegistration';
  onMenuEvent() {
    this.openMenu = !this.openMenu;
  }
}
