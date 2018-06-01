import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorePage } from '../more/more';
import { SyndicateTabsPage } from '../syndicate-tabs/syndicate-tabs';
import { HomePage } from '../home/home';
import { GamesPage } from '../games/games';
import { StoreTabsPage } from '../store-tabs/store-tabs';

@IonicPage()
@Component({
  selector: 'page-super-tabs',
  templateUrl: 'super-tabs.html',
})
export class SuperTabsPage {
  more: any = MorePage;
  syndicateTabs: any = SyndicateTabsPage;
  home: any = HomePage;
  games: any = GamesPage;
  storeTabs: any = StoreTabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperTabsPage');
  }

}
