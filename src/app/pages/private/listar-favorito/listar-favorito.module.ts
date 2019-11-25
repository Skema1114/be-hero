import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarFavoritoPage } from './listar-favorito.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFavoritoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarFavoritoPage]
})
export class ListarFavoritoPageModule {}
