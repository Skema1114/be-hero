import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';
import { HeroiFavorito } from '../Models/HeroiFavorito';

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

  public gravarHeroiFavorito(favoritoId, heroiFav: HeroiFavorito) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favoritoId + '/herois/';

    this.firestore.collection(url).add({ ...heroiFav });
  }

  public removerHeroiFavorito(favoritoId, heroiId) {
    const url = 'usuarios/' + this.usuarioEmail + '/favoritos/' + favoritoId + '/herois/' + heroiId;

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
