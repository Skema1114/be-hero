import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesFavoritoPage } from './detalhes-favorito.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesFavoritoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesFavoritoPage]
})
export class DetalhesFavoritoPageModule {}
