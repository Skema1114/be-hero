import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Favorito } from '../models/Favorito';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  usuarioLogado: firebase.User;
  usuarioEmail: string;
  favoritoIdGet: any;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage, private login: LoginService) {
    this.usuarioLogado = login.usuarioLogado;
    this.usuarioEmail = login.usuarioEmail;
  }

  public gravar(favorito: Favorito) {
    this.consultarFavoritos();
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
  /*
    consultarFavoritos() {
      let citiesRef = db.collection('cities');
  let allCities = citiesRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  
    }
    */
}
  /*
public favoritoId() {
const url = 'usuarios/' + this.usuarioEmail + '/favoritos/';
return this.firestore
.collection(url)
.snapshotChanges()
.pipe(
map(item =>
item.map(Favorito => {
const idFavorito = Favorito.payload.doc.id;
console.log('chave ' + idFavorito);
return { idFavorito };
})
)
);

public enviarFoto(foto: string, carroUid: string) {
const url = `fotos/${carroUid}/${new Date().getTime()}.jpg`;

this.storage
.ref(url)
.putString(foto, 'base64', { contentType: 'image/jpg' })
.then(resp => {
console.log('envio finalizado!', resp);
});
}*/