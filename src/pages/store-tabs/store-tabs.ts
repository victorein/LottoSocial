import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersYouPage } from '../offers-you/offers-you';
import { BonusCreditPage } from '../bonus-credit/bonus-credit';

@IonicPage()
@Component({
  selector: 'page-store-tabs',
  templateUrl: 'store-tabs.html',
})
export class StoreTabsPage {
  offers: any = OffersYouPage;
  credit: any = BonusCreditPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreTabsPage');
  }

}
