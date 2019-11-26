import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

import { SessionGuard } from '../../../guards/session.guard';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'detalhes-heroi/:idHeroi',
        loadChildren: '../detalhes-heroi/detalhes-heroi.module#DetalhesHeroiPageModule', canActivate: [SessionGuard]
      },
      {
        path: 'detalhes-favorito/:idFavorito',
        loadChildren: '../detalhes-favorito/detalhes-favorito.module#DetalhesFavoritoPageModule', canActivate: [SessionGuard]
      },
      {
        path: 'listar-heroi',
        loadChildren: '../listar-heroi/listar-heroi.module#ListarHeroiPageModule', canActivate: [SessionGuard]
      },
      {
        path: 'listar-favorito',
        loadChildren: '../listar-favorito/listar-favorito.module#ListarFavoritoPageModule', canActivate: [SessionGuard]
      },
      {
        path: 'listar-favorito',
        loadChildren: '../listar-favorito/listar-favorito.module#ListarFavoritoPageModule', canActivate: [SessionGuard]
      },

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/listar-heroi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
