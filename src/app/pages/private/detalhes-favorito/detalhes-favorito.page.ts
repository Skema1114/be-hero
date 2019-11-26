import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-detalhes-favorito',
  templateUrl: './detalhes-favorito.page.html',
  styleUrls: ['./detalhes-favorito.page.scss'],
})
export class DetalhesFavoritoPage implements OnInit {
  heroisFavorito: any;

  constructor(private rota: ActivatedRoute, private firestore: FirestoreService) {
    const qualFavorito = rota.snapshot.params.idFavorito;
    
    this.heroisFavorito = firestore.listarFavoritos(qualFavorito);

  }

  ngOnInit() {
  }

}
