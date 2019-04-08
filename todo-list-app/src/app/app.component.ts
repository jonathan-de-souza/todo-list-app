import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TestService } from "./shared/services/test.service";
import { Test } from "./shared/services/test.service";
import { testUserAgent } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private testService: TestService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const test: Test = {
        id: '1',
        text: 'teste teste teste teste teste teste',
        createdAt: new Date().getTime()
      };


      this.testService.addTest(test);
    });
  }
}
