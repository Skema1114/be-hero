import { Component, OnInit } from '@angular/core';
import { Favorito } from 'src/app/Models/Favorito';
import { LoginService } from 'src/app/services/login.service';
import { FavoritoService } from 'src/app/services/favorito.service';

@Component({
  selector: 'app-listar-favorito',
  templateUrl: './listar-favorito.page.html',
  styleUrls: ['./listar-favorito.page.scss'],
})
export class ListarFavoritoPage implements OnInit {
  favoritoX: Favorito;
  favorito: any;

  constructor(private fav: FavoritoService, private login: LoginService) {
    this.favoritoX = new Favorito();
    this.favorito = fav.listarFavorito();
  }

  ngOnInit() {
    this.favorito = this.fav.listarFavorito();
  }

  public editar(favoritoEditado) {
    this.favoritoX = favoritoEditado;
    this.fav.listarFavorito();
  }


  public gravar(): void {
    this.fav.gravarFavorito(this.favoritoX);
    this.favoritoX = new Favorito();
    console.log('HEROIS.TS USUARIO EMAIL = ' + this.login.usuarioEmail);
    /*
        this.fs.favoritoId().subscribe(resp => {
          console.log('HEROIS.TS ID FAVO = ', resp);
        });
        */
  }

  public apagar(idFavorito: string) {
    this.fav.removerFavorito(idFavorito);
  }
}