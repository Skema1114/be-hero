import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Favorito } from '../models/Favorito';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  usuarioLogado: firebase.User;
  usuarioEmail: string;
  favoritoIdGet: any;
  coisos: Observable<any[]>;



  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage, private login: LoginService) {
    this.usuarioLogado = login.usuarioLogado;
    this.usuarioEmail = login.usuarioEmail;
  }

  public gravarFavorito(favorito: Favorito) {
    // VERIFIOCA SE TEM ID
    if (favorito.idFavorito) {
      // SE TRATA DE UMA ATUALIZAÇÃO
      const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favorito.idFavorito;
      this.firestore.doc(url).update({ ...favorito });
    } else {
      const url = 'usuarios/' + this.usuarioEmail + '/favoritos/';
      favorito.emailUsuario = this.usuarioEmail;
      this.firestore.collection(url).add({ ...favorito });
    }
  }

  public remover(favorito: string) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favorito;
    this.firestore.doc(url).delete();
  }

  public listar() {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/';

    //  if (this.usuarioEmail == ) {
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
    // }

  }

  listarFavoritos(favoritoId) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favoritoId + '/herois/';

    return this.firestore
      .collection(url)
      .snapshotChanges()
      .pipe(
        map(item =>
          item.map(FavoritoId => {
            const id = FavoritoId.payload.doc.id;
            const dados = FavoritoId.payload.doc.data();
            return { id, ...dados };
          })
        )
      );
  }
}
