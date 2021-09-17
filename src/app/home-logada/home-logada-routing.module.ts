import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLogadaPage } from './home-logada.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLogadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLogadaPageRoutingModule {}
