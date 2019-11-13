import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lista-heroi', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/public/inicio/inicio.module#InicioPageModule' },
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  {
    path: 'criar-conta',
    loadChildren: './pages/public/criar-conta/criar-conta.module#CriarContaPageModule'
  },
  {
    path: 'inicio-privado',
    loadChildren: './pages/private/inicio-privado/inicio-privado.module#InicioPrivadoPageModule'
  },
  { path: 'lista-heroi', loadChildren: './pages/private/lista-heroi/lista-heroi.module#ListaHeroiPageModule' },
  { path: 'detalhes-heroi/:idHeroi', loadChildren: './pages/private/detalhes-heroi/detalhes-heroi.module#DetalhesHeroiPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
