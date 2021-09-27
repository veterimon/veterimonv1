import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasPassadasPageRoutingModule } from './consultas-passadas-routing.module';

import { ConsultasPassadasPage } from './consultas-passadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPassadasPageRoutingModule
  ],
  declarations: [ConsultasPassadasPage]
})
export class ConsultasPassadasPageModule {}
