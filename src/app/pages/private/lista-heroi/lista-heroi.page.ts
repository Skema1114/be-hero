import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-lista-heroi',
  templateUrl: './lista-heroi.page.html',
  styleUrls: ['./lista-heroi.page.scss']
})
export class ListaHeroiPage implements OnInit {
  retorno = new Array();
  retornoSeparado: any;
  quantidadeSelect: number;

  constructor(private heroiCaracter: HeroServiceService, private rota: Router) {
    this.quantidadeSelect = 100;
    
    for(){
    heroiCaracter.chamarMarvel('personagem', this.quantidadeSelect).subscribe(resp => {
      console.log('ESSE E O RETORNO', resp.data);

      resp.data.results.forEach(element => {
        this.retorno.push(element);
      });
      console.log(this.retorno);
    });
  };
  }


  heroiChamar(id: number) {
    this.heroiCaracter.chamarHeroi(id, 'personagem', 20).subscribe(respp => {
      this.retornoSeparado = respp.data.results;
      console.log(respp);
    });

  }

  ngOnInit() { }
}
