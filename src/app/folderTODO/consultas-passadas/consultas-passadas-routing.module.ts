import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasPassadasPage } from './consultas-passadas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasPassadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasPassadasPageRoutingModule {}
