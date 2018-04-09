import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchListPage } from './watchlist';

@NgModule({
  declarations: [
    WatchListPage,
  ],
  imports: [
    IonicPageModule.forChild(WatchListPage),
  ],
})
export class WatchListPageModule {}
