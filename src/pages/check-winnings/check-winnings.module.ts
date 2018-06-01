import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckWinningsPage } from './check-winnings';

@NgModule({
  declarations: [
    CheckWinningsPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckWinningsPage),
  ],
})
export class CheckWinningsPageModule {}
