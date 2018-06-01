import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SyndicatePage } from '../syndicate/syndicate';
import { CheckWinningsPage } from '../check-winnings/check-winnings';

@IonicPage()
@Component({
  selector: 'page-syndicate-tabs',
  templateUrl: 'syndicate-tabs.html',
})
export class SyndicateTabsPage {
  syndicate: any = SyndicatePage;
  winnings: any = CheckWinningsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyndicateTabsPage');
  }

}