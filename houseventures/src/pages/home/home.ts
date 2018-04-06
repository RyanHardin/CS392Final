import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: any;

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('The home page has loaded')
    this.http.get('https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=20').subscribe((res: res) => {
    console.log(res)
    this.coins = res.Data;
    console.log(this.coins);
    })
  }

  navigateToCoinDetailsPage(coin) {
    console.log(coin);
    console.log('Navigating to appliance details page.');
    this.navCtrl.push('CoinDetailsPage', {'coin': coin});
    }

}
export interface res {
  Data: any;

}