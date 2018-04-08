import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }


  getTopCoins() {
    return this.http.get('https://min-api.cryptocompare.com/data/top/volumes?tsym=USD&limit=10');
  }
  getCoinDetails(symbol) {
    return this.http.get('' + symbol);
  }
  getCoinPrice(symbol) {
    if(symbol != 'BTC') {
      return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=' +symbol+'&tsyms=BTC,USD,EUR');
    }else {
      return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=' +symbol+'&tsyms=USD,EUR,CAD');
    }
  }
}
