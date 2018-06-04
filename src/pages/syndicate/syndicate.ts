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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards = [
      {
        id: 0,
        image: "assets/imgs/syndicate/generic_syndicate.jpg",
        label: "ZULA0280",
        created: "May 29, 2018",
        endDate: "oneoff",
        expanded: false
      },
      {
        id: 1,
        image: "assets/imgs/syndicate/euromillions_syndicate.jpg",
        label: "ELBA0447",
        created: "May 29, 2018",
        endDate: "stopped",
        expanded: false
      },
      {
        id: 2,
        image: "assets/imgs/syndicate/eurojackpot_syndicate.jpg",
        label: "ZULA0280",
        created: "May 29, 2018",
        endDate: "oneoff",
        expanded: false
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyndicatePage');
  }

  expand(i) {
    this.cards[i]['expanded'] = this.cards[i]['expanded'] ? false : true;
  }
}
