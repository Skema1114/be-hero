import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-listar-heroi',
  templateUrl: './listar-heroi.page.html',
  styleUrls: ['./listar-heroi.page.scss']
})
export class ListarHeroiPage implements OnInit {
  retornoX = new Array();
  // retorno: any;
  retornoSeparado: any;
  quantidadeSelect: number;
  TOTAL_HEROIS: number;
  numOffset: number;
  numTimesLeft = 1;


  constructor(private marvelHeroi: MarvelService, private rota: Router) {
    this.quantidadeSelect = 50;
    this.numOffset = 0;

    this.mostrarHerois(this.numOffset);
  }

  public mostrarHerois(offset: number) {
    this.marvelHeroi.chamarMarvel('personagem', this.quantidadeSelect, offset).subscribe(resp => {

      this.TOTAL_HEROIS = resp.data.total;
      console.log('ESSE E O RETORNO', this.TOTAL_HEROIS);

      //this.retorno = resp.data.results;

      resp.data.results.forEach(element => {
        this.retornoX.push(element);
      });
    });
  }

  /*
    heroiChamar(id: number) {
      this.marvelHeroi.chamarHeroi(id, 'personagem', 20).subscribe(respp => {
        this.retornoSeparado = respp.data.results;
        console.log(respp);
      });

    }
  */

  // REFERENCIA: https://www.youtube.com/watch?v=M86HPj_YuXQ
  // E: https://github.com/jamesonsaunders/Ionic-4-Infinite-Scroll-Example/blob/master/src/app/home/home.page.html

  loadData(event) {
    setTimeout(() => {
      //this.addMoreItems();
      if (this.numOffset < (this.TOTAL_HEROIS - 100)/*1393*/) {
        this.numOffset += 50;
        console.log(this.numOffset);
        this.mostrarHerois(this.numOffset);
      } else {
        console.log('ACABOOOO');
        this.numTimesLeft -= 1;
      }
      event.target.complete();
    }, 3000);
  }
  /*
    addMoreItems() {
      if (this.numOffset < (this.TOTAL_HEROIS - 100)) {
        this.numOffset += 50;
        console.log(this.numOffset);
        this.mostrarHerois(this.numOffset);
      } else {
        console.log('pAAAAAOOSOSOOS');
        this.numTimesLeft -= 1;
      }
      for (let i = 0; i < 10; i++) {
      }
    }
    */

  ngOnInit() { }
}