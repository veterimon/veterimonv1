import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinoPageRoutingModule } from './destino-routing.module';

import { DestinoPage } from './destino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinoPageRoutingModule
  ],
  declarations: [DestinoPage]
})
export class DestinoPageModule {}
