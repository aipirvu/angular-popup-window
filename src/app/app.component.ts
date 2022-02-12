import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-popup-window';
  isWindowOpened = true;

  openWindow(): void {
    this.isWindowOpened = true;
  }

  closeWindow(): void {
    this.isWindowOpened = false;
  }
}
