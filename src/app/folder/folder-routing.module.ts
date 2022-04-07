import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'ui-card',
    loadChildren: () =>
      import('./ui-card/ui-card-routing.module').then(
        (m) => m.UiCardPageRoutingModule
      ),
  },
  {
    path: 'whatsapp',
    loadChildren: () => import('./whatsapp/whatsapp.module').then( m => m.WhatsappPageModule)
  },
  {
    path: 'custom-tab',
    loadChildren: () => import('./custom-tab/custom-tab.module').then( m => m.CustomTabPageModule)
  },
  {
    path: 'glass',
    loadChildren: () => import('./glass/glass.module').then( m => m.GlassPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
