import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WatchListPage } from '../watchlist/watchlist';
import { Top20Page } from '../top20/top20';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WatchListPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
