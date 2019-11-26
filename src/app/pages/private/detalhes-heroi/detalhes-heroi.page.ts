import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IbmTradutorWatsonService } from 'src/app/services/ibm-tradutor-watson.service';
import { HeroiFavoritoService } from 'src/app/services/heroi-favorito.service';
import { MarvelService } from 'src/app/services/marvel.service';
import { HeroiFavorito } from 'src/app/Models/HeroiFavorito';
import { FavoritoService } from 'src/app/services/favorito.service';

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
  heroiX: HeroiFavorito;
  qualHeroi: number;
  escondido: boolean;
  retornoFav: any;
  favoritoSelect: string;
  nomePerson: string;
  imgPerson: string;

  constructor(
    private rota: ActivatedRoute,
    private marvelHeroi: MarvelService,
    private watson: IbmTradutorWatsonService,
    private herFav: HeroiFavoritoService,
    private fav: FavoritoService
  ) {
    this.escondido = false;

    this.qualHeroi = rota.snapshot.params.idHeroi;
    marvelHeroi.chamarHeroi(this.qualHeroi, 'personagem', 20).subscribe(respPersonagem => {
      this.retornoPersonagem = respPersonagem.data.results;
      this.textoDetalhes = respPersonagem.data.results[0].description;
      console.log('DETALHES PUROS ' + this.textoDetalhes);

      // console.log(watson.traduzir(this.textoDetalhes), null, 2);
      this.heroiX = new HeroiFavorito();
    });

    watson.traduzir(this.textoDetalhes).subscribe(respDetalhes => {
      this.textoDetalhesTraduzido = respDetalhes.translations;
      console.log('TRADUCAO ' + this.textoDetalhesTraduzido);
      console.log('DETAHES PUROS 3 LOG ' + this.textoDetalhes);

    })

    marvelHeroi.chamarDetalhesHeroi(this.qualHeroi, 'quadrinhos').subscribe(respQuadrinhos => {
      this.retornoQuadrinhos = respQuadrinhos.data.results;
    });

    marvelHeroi.chamarDetalhesHeroi(this.qualHeroi, 'eventos').subscribe(respEventos => {
      this.retornoEventos = respEventos.data.results;
    });

    marvelHeroi.chamarDetalhesHeroi(this.qualHeroi, 'series').subscribe(respSeries => {
      this.retornoSeries = respSeries.data.results;
    });

    marvelHeroi.chamarDetalhesHeroi(this.qualHeroi, 'stories').subscribe(respStories => {
      this.retornoStories = respStories.data.results;
    });

    fav.listarFavorito().subscribe(respFav => {
      this.retornoFav = respFav;
    });
  }

  public favoritarHeroi(favSelect, idHeroi, nomePerson, imgPerson): void {
    this.heroiX.idHeroi = idHeroi;
    this.heroiX.nome = nomePerson;
    this.heroiX.img = imgPerson;
    this.herFav.gravarHeroiFavorito(favSelect, this.heroiX);
  }

  public esconderFavoritos() {
    this.escondido = true;
  }

  public enviarSelect(idFav, nomePerson, imgPerson) {
    this.nomePerson = nomePerson;
    this.imgPerson = imgPerson;
    this.favoritarHeroi(idFav, this.qualHeroi, nomePerson, imgPerson);

  }

  ngOnInit() {
  }

}
