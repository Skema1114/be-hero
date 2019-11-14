import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from 'src/app/services/hero-service.service';

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

  constructor(private rota: ActivatedRoute, private heroiCaracterSolo: HeroServiceService) {
    const qualHeroi = rota.snapshot.params.idHeroi;

    heroiCaracterSolo.chamarHeroi(qualHeroi, 'personagem', 20).subscribe(resp => {
      this.retorno = resp.data.results;
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
