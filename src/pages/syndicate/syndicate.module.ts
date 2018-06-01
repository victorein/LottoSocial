import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyndicatePage } from './syndicate';

@NgModule({
  declarations: [
    SyndicatePage,
  ],
  imports: [
    IonicPageModule.forChild(SyndicatePage),
  ],
})
export class SyndicatePageModule {}
