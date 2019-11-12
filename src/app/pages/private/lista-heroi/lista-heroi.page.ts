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

  constructor(private heroiCaracter: HeroServiceService, private rota: Router) {
    heroiCaracter.chamarMarvel('personagem', 1).subscribe(resp => {
      this.retorno = resp;
      console.log('ESSE E O RETORNO' + this.retorno);
    });
  }

  ngOnInit() { }
}
