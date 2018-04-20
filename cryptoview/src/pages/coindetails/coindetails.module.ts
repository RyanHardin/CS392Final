import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoinDetailsPage } from './coindetails';

@NgModule({
  declarations: [
    CoinDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoinDetailsPage),
  ],
})
export class CoindetailsPageModule {}
