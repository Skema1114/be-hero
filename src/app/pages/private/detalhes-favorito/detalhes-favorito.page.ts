import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroiFavoritoService } from 'src/app/services/heroi-favorito.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-detalhes-favorito',
  templateUrl: './detalhes-favorito.page.html',
  styleUrls: ['./detalhes-favorito.page.scss'],
})
export class DetalhesFavoritoPage implements OnInit {
  heroisFavorito: any;
  qualFavorito;
  retornoX = new Array();
  retornoHeroi = new Array();
  qualHeroi: number;

  constructor(private rota: ActivatedRoute, private herFav: HeroiFavoritoService, public marvel: MarvelService) {
    this.qualFavorito = rota.snapshot.params.idFavorito;

    this.heroisFavorito = herFav.listarHeroiFavorito(this.qualFavorito);

    herFav.listarHeroiFavorito(this.qualFavorito).subscribe(resHeroi => {
      resHeroi.forEach(element => {
        this.retornoHeroi.push(element);
      });
    });
  }


  ngOnInit() {
  }

  public chamar(idHeroi) {
    this.marvel.chamarHeroi(idHeroi, 'personagem', 20).subscribe(respHerois => {
      respHerois.data.results.forEach(element => {
        this.retornoX.push(element);
      });
    });
  }

  public apagar(idHeroi: string) {
    this.herFav.removerHeroiFavorito(this.qualFavorito, idHeroi);
  }

}
