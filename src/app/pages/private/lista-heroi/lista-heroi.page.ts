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
  retornoSeparado: any;
  quantidadeSelect: number;

  constructor(private heroiCaracter: HeroServiceService, private rota: Router) {
    this.quantidadeSelect = 20;

    heroiCaracter.chamarMarvel('personagem', this.quantidadeSelect).subscribe(resp => {
      console.log('ESSE E O RETORNO', resp.data);
      this.retorno = resp.data.results;
      console.log(this.retorno);
    });
  }


  heroiChamar(id: number) {
    this.heroiCaracter.chamarHeroi(id, 'personagem', 20).subscribe(respp => {
      this.retornoSeparado = respp.data.results;
      console.log(respp);
      this.heroiCaracter.limparChamarHeroi();
    });

  }

  ngOnInit() { }
}
