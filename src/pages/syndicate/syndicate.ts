import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-syndicate',
  templateUrl: 'syndicate.html',
})
export class SyndicatePage {
  cards: any = [];
  itemExpandHeight: number = 82;
  dueImage = 'assets/img/status_due.png';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards = [{
      id: 0,
      image: "assets/image/landing-page-header@3x.png",
      label: "Bounty syndicate",
      expanded: false
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyndicatePage');
  }

  expand(i) {
    this.cards[i]['expanded'] = this.cards[i]['expanded'] ? false : true;
  }
}
