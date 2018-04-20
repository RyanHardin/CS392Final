import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any[];
  list: any;
  items: string[];
  gotCoins: boolean = false;

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    let list = [];
    setTimeout(() => {
      this.ApiProvider.getAllCoins().subscribe((res: res) => {
        let coins = res.Data;
        //console.log(coins);
        for (var key in coins) {
          //console.log(key);
          if (coins.hasOwnProperty(key)) {
              //console.log(key + " -> " + coins[key]);
              list[key] = coins[key];
          }

      }
        this.coins = list;
        //console.log(this.coins);
       })
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public ApiProvider: ApiProvider) {
    //this.initializedItems();
    let list = [];
    this.ApiProvider.getAllCoins().subscribe((res: res) => {
    //console.log(res.Data);
    let coins = res.Data;
    //console.log(coins);
    for (var key in coins) {
      //console.log(key);
      if (coins.hasOwnProperty(key)) {
          //console.log(coins[key]);
          list[key] = coins[key];
      }
  }
  this.coins = list;
  console.log(this.coins);
  this.gotCoins = true;
   })
   //console.log(this.coins);
  }

  ionViewDidLoad() {
    //console.log(this.coins);
    //this.gotCoins = true;
    //console.log(this.coins['BTC']);
  }

  navigateToCoinDetailsPage(coin) {
    //console.log(coin);
    //console.log('Navigating to appliance details page.');
    this.navCtrl.push('CoinDetailsPage', {'coin': coin});
    }
  getItems(event) {

  }

    /**initializedItems(){
    this.items = this.coins.filter(function( obj ) {
        return obj.name;
      });

  }

    getItems(ev: any){
      this.initializedItems();

      let val = ev.target.value;

      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }**/

}
export interface res {
  Data: any[];

}