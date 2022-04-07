import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiCardPageRoutingModule } from './ui-card-routing.module';

import { UiCardPage } from './ui-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiCardPageRoutingModule
  ],
  declarations: [UiCardPage]
})
export class UiCardPageModule {}
