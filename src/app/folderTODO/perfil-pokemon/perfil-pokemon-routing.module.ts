import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPokemonPage } from './perfil-pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPokemonPageRoutingModule {}
