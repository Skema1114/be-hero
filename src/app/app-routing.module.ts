import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './guards/session.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
  {
    path: 'detalhes-heroi/:idHeroi', loadChildren: './pages/private/detalhes-heroi/detalhes-heroi.module#DetalhesHeroiPageModule', canActivate: [SessionGuard]
  },
  { path: 'listar-heroi', loadChildren: './pages/listar-heroi/listar-heroi.module#ListarHeroiPageModule', canActivate: [SessionGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
