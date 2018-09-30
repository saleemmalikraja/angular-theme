import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-theme';
  appId = 'theme1';

  switchTheme(appId: string) {
    this.appId = appId;
  }

}

