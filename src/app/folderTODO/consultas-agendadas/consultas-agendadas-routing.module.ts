import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasAgendadasPage } from './consultas-agendadas.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasAgendadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasAgendadasPageRoutingModule {}
