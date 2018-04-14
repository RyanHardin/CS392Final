import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any;
  items: string[];

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.ApiProvider.getTopCoins().subscribe((res: res) => {
        this.coins = res.Data;
        console.log(this.coins);
       })
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  constructor(public navCtrl: NavController, public ApiProvider: ApiProvider) {
    //this.initializedItems();
    this.ApiProvider.getTopCoins().subscribe((res: res) => {
    //console.log(res.Data);
    this.coins = res.Data;
    console.log(this.coins);
   })
  }

  ionViewDidLoad() {

  }

  navigateToCoinDetailsPage(coin) {
    //console.log(coin);
    //console.log('Navigating to appliance details page.');
    this.navCtrl.push('CoinDetailsPage', {'coin': coin});
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