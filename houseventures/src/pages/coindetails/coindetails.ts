import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';
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

@ViewChild('monthlyLineCanvas') monthlyLineCanvas;
@ViewChild('weeklyLineCanvas') weeklyLineCanvas;


  coin: any;
  symbol: any;
  name: any;
  supply: any;
  price: any;

  monthlyLineChart: any;
  monthlyData;
  monthlyDates;
  monthlyCoinCost;

  weeklyLineChart: any;
  weeklyData;
  weeklyDates;
  weeklyCoinCost;

  CreateMonthlyChart(){
    this.monthlyLineChart = new Chart(this.monthlyLineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.monthlyDates,
                datasets: [{
                       data: this.monthlyCoinCost,
                       label: "Coin Cost",
                       borderColor: "#3e95cd",
                       fill: false
                     }
                   ]
            },
            options: {
              title: {
                    display: true,
                    text: 'Monthly Coin Prices'
                  }
            }

        });
  }

  CreateWeeklyChart(){
    this.weeklyLineChart = new Chart(this.weeklyLineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.weeklyDates,
                datasets: [{
                       data: this.weeklyCoinCost,
                       label: "Coin Cost",
                       borderColor: "#3e95cd",
                       fill: false
                     }
                   ]
            },
            options: {
              title: {
                    display: true,
                    text: 'Weekly Coin Prices'
                  }
            }

        });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider, public storage: Storage) {
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

addToWatchlist(coin) {
  var list;
  this.storage.get('watchlist').then((watchlist) => {
    console.log('The watchlist is currently' + watchlist);
    var arr = JSON.parse(watchlist);
    arr.push(coin);
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoindetailsPage');

    this.ApiProvider.getMonthlyCoinData(this.symbol).subscribe((res: res) => {
      console.log(res)
      this.monthlyData = res.Data;
      var t = _.map(this.monthlyData, 'time');
      this.monthlyDates = t.map(function(v) {
        return moment(v*1000).format('MMM DD');
      });
      console.log(t);
      this.monthlyCoinCost = _.map(this.monthlyData,'close');
      this.CreateMonthlyChart();
    });

    this.ApiProvider.getWeeklyCoinData(this.symbol).subscribe((res: res) => {
      console.log(res)
      this.weeklyData = res.Data;
      var t = _.map(this.weeklyData, 'time');
      this.weeklyDates = t.map(function(v) {
        return moment(v*1000).format('MMM DD');
      });
      console.log(t);
      this.weeklyCoinCost = _.map(this.weeklyData,'close');
      this.CreateWeeklyChart();
    });
  }

}

export interface res {
  Data: any[];

}
