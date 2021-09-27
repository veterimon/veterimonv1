import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarNovaConsultaPageRoutingModule } from './agendar-nova-consulta-routing.module';

import { AgendarNovaConsultaPage } from './agendar-nova-consulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarNovaConsultaPageRoutingModule
  ],
  declarations: [AgendarNovaConsultaPage]
})
export class AgendarNovaConsultaPageModule {}
