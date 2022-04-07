import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomTabPage } from './custom-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CustomTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomTabPageRoutingModule {}
