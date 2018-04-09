import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any;

  constructor(public navCtrl: NavController, public ApiProvider: ApiProvider) {
    this.ApiProvider.getTopCoins().subscribe((res: res) => {
    //console.log(res.Data);
    this.coins = res.Data;
    console.log(this.coins);
   })
  }

  ionViewDidLoad() {

  }

  navigateToCoinDetailsPage(coin) {
    console.log(coin);
    console.log('Navigating to appliance details page.');
    this.navCtrl.push('CoinDetailsPage', {'coin': coin});
    }

}
export interface res {
  Data: any[];

}