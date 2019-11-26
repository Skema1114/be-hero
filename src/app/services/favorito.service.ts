import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Favorito } from '../models/Favorito';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  usuarioLogado: firebase.User;
  usuarioEmail: string;

  constructor(private firestore: AngularFirestore, private login: LoginService) {
    this.usuarioLogado = login.usuarioLogado;
    this.usuarioEmail = login.usuarioEmail;
  }

  public gravarFavorito(favorito: Favorito) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/';

    favorito.emailUsuario = this.usuarioEmail;
    this.firestore.collection(url).add({ ...favorito });
  }

  public editarFavorito(favorito: Favorito) {
    if (favorito.idFavorito) {
      const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favorito.idFavorito;

      this.firestore.doc(url).update({ ...favorito });
    }
  }

  public removerFavorito(favorito: string) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favorito;

    this.firestore.doc(url).delete();
  }

  public listarFavorito() {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/';

    return this.firestore
      .collection(url)
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(Favorito => {
            const id = Favorito.payload.doc.id;
            const dados = Favorito.payload.doc.data();
            return { id, ...dados };
          })
        )
      );
  }
}
