import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Favorito } from '../models/Favorito';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HeroiFavoritoService {
  usuarioLogado: firebase.User;
  usuarioEmail: string;

  constructor(private firestore: AngularFirestore, private login: LoginService) {
    this.usuarioLogado = login.usuarioLogado;
    this.usuarioEmail = login.usuarioEmail;
  }

  public gravarHeroiFavorito(favorito: Favorito) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/';

    favorito.emailUsuario = this.usuarioEmail;
    this.firestore.collection(url).add({ ...favorito });
  }

  public removerHeroiFavorito(favorito: string) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favorito;

    this.firestore.doc(url).delete();
  }


  public listarHeroiFavorito(favoritoId) {
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
