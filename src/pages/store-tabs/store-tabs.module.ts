import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreTabsPage } from './store-tabs';

@NgModule({
  declarations: [
    StoreTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreTabsPage),
  ],
})
export class StoreTabsPageModule {}
