import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasAgendadasPageRoutingModule } from './consultas-agendadas-routing.module';

import { ConsultasAgendadasPage } from './consultas-agendadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasAgendadasPageRoutingModule
  ],
  declarations: [ConsultasAgendadasPage]
})
export class ConsultasAgendadasPageModule {}
