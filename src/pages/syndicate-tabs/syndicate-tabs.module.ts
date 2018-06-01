import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyndicateTabsPage } from './syndicate-tabs';

@NgModule({
  declarations: [
    SyndicateTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SyndicateTabsPage),
  ],
})
export class SyndicateTabsPageModule {}
