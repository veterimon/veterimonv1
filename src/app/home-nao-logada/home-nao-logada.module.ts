import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNaoLogadaPageRoutingModule } from './home-nao-logada-routing.module';

import { HomeNaoLogadaPage } from './home-nao-logada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNaoLogadaPageRoutingModule
  ],
  declarations: [HomeNaoLogadaPage]
})
export class HomeNaoLogadaPageModule {}
