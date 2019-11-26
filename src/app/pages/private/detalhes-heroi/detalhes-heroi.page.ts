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

  retorno: any;
  retornoQuadrinhos: any;
  retornoEventos: any;
  retornoSeries: any;
  retornoStories: any;
  textoDetalhes: any;

  constructor(private rota: ActivatedRoute, private heroiCaracterSolo: HeroiService, private watson: IbmTradutorWatsonService) {
    const qualHeroi = rota.snapshot.params.idHeroi;

    heroiCaracterSolo.chamarHeroi(qualHeroi, 'personagem', 20).subscribe(resp => {
      this.retorno = resp.data.results;
      this.textoDetalhes = resp.data.results[0].description;
      //console.log(this.textoDetalhes);

      // console.log(watson.traduzir(this.textoDetalhes), null, 2);



    });

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
