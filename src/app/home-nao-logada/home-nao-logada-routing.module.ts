import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNaoLogadaPage } from './home-nao-logada.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNaoLogadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNaoLogadaPageRoutingModule {}
