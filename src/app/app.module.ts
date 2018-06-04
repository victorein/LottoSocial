import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SuperTabsPage } from '../pages/super-tabs/super-tabs';
import { SyndicateTabsPage } from '../pages/syndicate-tabs/syndicate-tabs';
import { StoreTabsPage } from '../pages/store-tabs/store-tabs';
import { MorePage } from '../pages/more/more';
import { HomePage } from '../pages/home/home';
import { GamesPage } from '../pages/games/games';
import { SyndicatePage } from '../pages/syndicate/syndicate';
import { CheckWinningsPage } from '../pages/check-winnings/check-winnings';
import { OffersYouPage } from '../pages/offers-you/offers-you';
import { BonusCreditPage } from '../pages/bonus-credit/bonus-credit';
import { ExpandableComponent } from '../components/expandable/expandable';

@NgModule({
  declarations: [
    MyApp,
    SuperTabsPage,
    SyndicateTabsPage,
    StoreTabsPage,
    MorePage,
    HomePage,
    GamesPage,
    SyndicatePage,
    CheckWinningsPage,
    OffersYouPage,
    BonusCreditPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SuperTabsPage,
    SyndicateTabsPage,
    StoreTabsPage,
    MorePage,
    HomePage,
    GamesPage,
    SyndicatePage,
    CheckWinningsPage,
    OffersYouPage,
    BonusCreditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
