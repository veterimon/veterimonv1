import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinoPage } from './destino.page';

const routes: Routes = [
  {
    path: '',
    component: DestinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinoPageRoutingModule {}
