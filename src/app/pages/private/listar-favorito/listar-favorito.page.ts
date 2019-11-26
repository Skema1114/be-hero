import { Component, OnInit } from '@angular/core';
import { Favorito } from 'src/app/Models/Favorito';
import { FirestoreService } from 'src/app/services/firestore.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-listar-favorito',
  templateUrl: './listar-favorito.page.html',
  styleUrls: ['./listar-favorito.page.scss'],
})
export class ListarFavoritoPage implements OnInit {
  favoritoX: Favorito;
  favorito: any;

  constructor(private fs: FirestoreService, private login: LoginService) {
    this.favoritoX = new Favorito();
    this.favorito = fs.listar();
  }

  ngOnInit() { }

  public editar(favoritoEditado) {
    this.favoritoX = favoritoEditado;
    this.fs.listar();
  }

  public gravar(): void {
    //this.favoritoX.emailUsuario = this.login.usuarioEmail;
    this.fs.gravar(this.favoritoX);
    this.favoritoX = new Favorito();
    console.log('HEROIS.TS USUARIO EMAIL = ' + this.login.usuarioEmail);
    /*
        this.fs.favoritoId().subscribe(resp => {
          console.log('HEROIS.TS ID FAVO = ', resp);
        });
        */
  }

  public apagar(idFavorito: string) {
    this.fs.remover(idFavorito);
  }
}