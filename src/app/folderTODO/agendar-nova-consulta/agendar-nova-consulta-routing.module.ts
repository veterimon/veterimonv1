import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarNovaConsultaPage } from './agendar-nova-consulta.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarNovaConsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarNovaConsultaPageRoutingModule {}
