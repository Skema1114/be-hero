import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroiService } from 'src/app/services/heroi.service';

@Component({
  selector: 'app-listar-heroi',
  templateUrl: './listar-heroi.page.html',
  styleUrls: ['./listar-heroi.page.scss']
})
export class ListarHeroiPage implements OnInit {
  // retorno = new Array();
  retorno: any;
  retornoSeparado: any;
  quantidadeSelect: number;
  numOffset = 0;

  constructor(private heroiCaracter: HeroiService, private rota: Router) {
    this.quantidadeSelect = 100;


    heroiCaracter.chamarMarvel('personagem', this.quantidadeSelect).subscribe(resp => {

      const TOTAL_HEROIS = resp.data.total;
      console.log('ESSE E O RETORNO', TOTAL_HEROIS);

      this.retorno = resp.data.results;
      /*
      resp.data.results.forEach(element => {
        this.retorno.push(element);
      });
      */
      console.log(this.retorno);
    });
  }


  heroiChamar(id: number) {
    this.heroiCaracter.chamarHeroi(id, 'personagem', 20).subscribe(respp => {
      this.retornoSeparado = respp.data.results;
      console.log(respp);
    });

  }

  ngOnInit() { }
}