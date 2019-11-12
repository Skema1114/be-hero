import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-lista-heroi',
  templateUrl: './lista-heroi.page.html',
  styleUrls: ['./lista-heroi.page.scss']
})
export class ListaHeroiPage implements OnInit {
  retorno: any;
  maxHerois: string;

  constructor(private heroiCaracter: HeroServiceService, private rota: Router) {
    heroiCaracter.chamarMarvel('personagem', 20).subscribe(resp => {
      console.log('ESSE E O RETORNO', resp.data);
      // this.maxHerois = resp.data.results.thumnail.path;
      this.retorno = resp.data.results;
      console.log(this.retorno);
    });
  }


  ngOnInit() { }
}
