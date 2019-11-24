import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SessionGuard } from '../app/guards/session.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/private/tabs/tabs.module#TabsPageModule',
    canActivate: [SessionGuard]
  },
  {
    path: 'inicio',
    loadChildren: './pages/public/inicio/inicio.module#InicioPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/public/login/login.module#LoginPageModule'
  },
  {
    path: 'criar-conta',
    loadChildren: './pages/public/criar-conta/criar-conta.module#CriarContaPageModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
