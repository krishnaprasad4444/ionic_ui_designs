import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomTabPageRoutingModule } from './custom-tab-routing.module';

import { CustomTabPage } from './custom-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomTabPageRoutingModule
  ],
  declarations: [CustomTabPage]
})
export class CustomTabPageModule {}
