import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroiService } from 'src/app/services/heroi.service';
import { IbmTradutorWatsonService } from 'src/app/services/ibm-tradutor-watson.service';

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

  constructor(private rota: ActivatedRoute, private heroiCaracterSolo: HeroiService, private watson: IbmTradutorWatsonService) {
    const qualHeroi = rota.snapshot.params.idHeroi;

    heroiCaracterSolo.chamarHeroi(qualHeroi, 'personagem', 20).subscribe(respPersonagem => {
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

    heroiCaracterSolo.chamarDetalhesHeroi(qualHeroi, 'quadrinhos').subscribe(respQuadrinhos => {
      this.retornoQuadrinhos = respQuadrinhos.data.results;
    });

    heroiCaracterSolo.chamarDetalhesHeroi(qualHeroi, 'eventos').subscribe(respEventos => {
      this.retornoEventos = respEventos.data.results;
    });

    heroiCaracterSolo.chamarDetalhesHeroi(qualHeroi, 'series').subscribe(respSeries => {
      this.retornoSeries = respSeries.data.results;
    });

    heroiCaracterSolo.chamarDetalhesHeroi(qualHeroi, 'stories').subscribe(respStories => {
      this.retornoStories = respStories.data.results;
    });
  }

  ngOnInit() {
  }

}
