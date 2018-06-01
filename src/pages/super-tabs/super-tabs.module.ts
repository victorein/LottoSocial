import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuperTabsPage } from './super-tabs';

@NgModule({
  declarations: [
    SuperTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SuperTabsPage),
  ],
})
export class SuperTabsPageModule {}
