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
  qualFavorito;


  constructor(private rota: ActivatedRoute, private herFav: HeroiFavoritoService) {
    this.qualFavorito = rota.snapshot.params.idFavorito;

    this.heroisFavorito = herFav.listarHeroiFavorito(this.qualFavorito);

  }

  ngOnInit() {
  }

  public apagar(idHeroi: string) {
    this.herFav.removerHeroiFavorito(this.qualFavorito, idHeroi);
  }

}
