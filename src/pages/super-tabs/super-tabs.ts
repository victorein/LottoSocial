import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MorePage } from '../more/more';
import { SyndicatePage } from '../syndicate/syndicate';
import { HomePage } from '../home/home';
import { GamesPage } from '../games/games';
import { StorePage } from '../store/store';

@IonicPage()
@Component({
  selector: 'page-super-tabs',
  templateUrl: 'super-tabs.html',
})
export class SuperTabsPage {
  more: any = MorePage;
  syndicate: any = SyndicatePage;
  home: any = HomePage;
  games: any = GamesPage;
  store: any = StorePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperTabsPage');
  }

}
