import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLogadaPageRoutingModule } from './home-logada-routing.module';

import { HomeLogadaPage } from './home-logada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLogadaPageRoutingModule
  ],
  declarations: [HomeLogadaPage]
})
export class HomeLogadaPageModule {}
