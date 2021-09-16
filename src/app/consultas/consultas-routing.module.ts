import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasPage } from './consultas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasPageRoutingModule {}
