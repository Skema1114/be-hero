import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IbmTradutorWatsonService } from 'src/app/services/ibm-tradutor-watson.service';
import { HeroiFavoritoService } from 'src/app/services/heroi-favorito.service';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-detalhes-heroi',
  templateUrl: './detalhes-heroi.page.html',
  styleUrls: ['./detalhes-heroi.page.scss'],
})
export class DetalhesHeroiPage implements OnInit {

  sliderConfig = {
    initialSlide: 1,
    speed: 400
  };

  retornoPersonagem: any;
  retornoQuadrinhos: any;
  retornoEventos: any;
  retornoSeries: any;
  retornoStories: any;
  textoDetalhes: string;
  textoDetalhesTraduzido: string;

  constructor(
    private rota: ActivatedRoute,
    private marvelHeroi: MarvelService,
    private watson: IbmTradutorWatsonService,
    private herFav: HeroiFavoritoService
  ) {
    const qualHeroi = rota.snapshot.params.idHeroi;

    marvelHeroi.chamarHeroi(qualHeroi, 'personagem', 20).subscribe(respPersonagem => {
      this.retornoPersonagem = respPersonagem.data.results;
      this.textoDetalhes = respPersonagem.data.results[0].description;
      console.log('DETALHES PUROS ' + this.textoDetalhes);

      // console.log(watson.traduzir(this.textoDetalhes), null, 2);
    });

    watson.traduzir(this.textoDetalhes).subscribe(respDetalhes => {
      this.textoDetalhesTraduzido = respDetalhes.translations;
      console.log('TRADUCAO ' + this.textoDetalhesTraduzido);
      console.log('DETAHES PUROS 3 LOG ' + this.textoDetalhes);

    })

    marvelHeroi.chamarDetalhesHeroi(qualHeroi, 'quadrinhos').subscribe(respQuadrinhos => {
      this.retornoQuadrinhos = respQuadrinhos.data.results;
    });

    marvelHeroi.chamarDetalhesHeroi(qualHeroi, 'eventos').subscribe(respEventos => {
      this.retornoEventos = respEventos.data.results;
    });

    marvelHeroi.chamarDetalhesHeroi(qualHeroi, 'series').subscribe(respSeries => {
      this.retornoSeries = respSeries.data.results;
    });

    marvelHeroi.chamarDetalhesHeroi(qualHeroi, 'stories').subscribe(respStories => {
      this.retornoStories = respStories.data.results;
    });
  }

  ngOnInit() {
  }

}
