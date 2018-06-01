import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SuperTabsPage } from '../pages/super-tabs/super-tabs';
import { MorePage } from '../pages/more/more';
import { SyndicatePage } from '../pages/syndicate/syndicate';
import { HomePage } from '../pages/home/home';
import { GamesPage } from '../pages/games/games';
import { StorePage } from '../pages/store/store';

@NgModule({
  declarations: [
    MyApp,
    SuperTabsPage,
    MorePage,
    SyndicatePage,
    HomePage,
    GamesPage,
    StorePage
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
    MorePage,
    SyndicatePage,
    HomePage,
    GamesPage,
    StorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
