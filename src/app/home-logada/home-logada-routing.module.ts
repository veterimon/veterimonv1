import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLogadaPage } from './home-logada.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLogadaPage,

    children: [
      

      {
        path: 'consultas',
        loadChildren: () => import('../consultas/consultas.module').then(m => m.ConsultasPageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLogadaPageRoutingModule { }
