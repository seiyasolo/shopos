import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'CategoryPage';
  tab3Root = 'ActivityPage';
  tab4Root = 'MyPage';

  constructor() {

  }
}
