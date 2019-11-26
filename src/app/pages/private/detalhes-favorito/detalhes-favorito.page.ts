import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroiFavoritoService } from 'src/app/services/heroi-favorito.service';

@Component({
  selector: 'app-detalhes-favorito',
  templateUrl: './detalhes-favorito.page.html',
  styleUrls: ['./detalhes-favorito.page.scss'],
})
export class DetalhesFavoritoPage implements OnInit {
  heroisFavorito: any;
  

  constructor(private rota: ActivatedRoute, private herFav: HeroiFavoritoService) {
    const qualFavorito = rota.snapshot.params.idFavorito;

    this.heroisFavorito = herFav.listarHeroiFavorito(qualFavorito);

  }

  ngOnInit() {
  }

}
