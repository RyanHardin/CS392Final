import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Chart } from 'chart.js';
import * as _ from "lodash";
import * as moment from 'moment';


/**
 * Generated class for the CoindetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coindetails',
  templateUrl: 'coindetails.html',
})
export class CoinDetailsPage {

  coin: any;
  symbol: any;
  name: any;
  supply: any;
  price: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider) {
    //console.log(this.navParams.get('coin'));
    this.coin = this.navParams.get('coin');
    this.symbol = this.coin.SYMBOL;
    //console.log(this.symbol);
    this.name = this.coin.FULLNAME;
    //console.log(this.name);
    this.supply = this.coin.SUPPLY;
    this.ApiProvider.getCoinPrice(this.symbol).subscribe((price: any) => {
      console.log(price);
      this.price = price;
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoindetailsPage');
  }

}
