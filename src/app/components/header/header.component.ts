import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() openMenu: boolean = true;

  handleClick() {
    this.openMenu = !this.openMenu;
  }
}
