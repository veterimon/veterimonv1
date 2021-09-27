import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPokemonPageRoutingModule } from './perfil-pokemon-routing.module';

import { PerfilPokemonPage } from './perfil-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPokemonPageRoutingModule
  ],
  declarations: [PerfilPokemonPage]
})
export class PerfilPokemonPageModule {}
