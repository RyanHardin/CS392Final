import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as _ from "lodash";


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
  nocoins: boolean = false;

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.storage.get('watchlist').then((watchlist) => {
        if(watchlist) {
          console.log('The watchlist is currently' + watchlist);
          this.coins = JSON.parse(watchlist);
        }else {
          this.nocoins = true;
        }
      })
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.get('watchlist').then((watchlist) => {
      if(watchlist) {
        console.log('The watchlist is currently' + watchlist);
        this.coins = JSON.parse(watchlist);
      }else {
        this.nocoins = true;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchlistPage');
    this.storage.get('watchlist').then((watchlist) => {
      if(watchlist) {
        console.log('The watchlist is currently' + watchlist);
        this.coins = JSON.parse(watchlist);
      }else {
        this.nocoins = true;
      }
    })
  }

  navigateToCoinDetailsPage(coin) {
    console.log(coin);
    console.log('Navigating to appliance details page.');
    this.navCtrl.push('CoinDetailsPage', {'coin': coin});
    }

}
