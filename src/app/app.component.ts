import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { LocalStorage } from 'ngx-webstorage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = 'TabsPage';
  // @LocalStorage()
  // public isLogin: boolean = false;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
