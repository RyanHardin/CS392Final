import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html',
})
export class WatchListPage {

  coins: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
  }

  navigateToCoinDetailsPage(coin) {
    console.log(coin);
    console.log('Navigating to appliance details page.');
    this.navCtrl.push('CoinDetailsPage', {'coin': coin});
    }

}
