import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/databa';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-heroi',
  templateUrl: './lista-heroi.page.html',
  styleUrls: ['./lista-heroi.page.scss']
})
export class ListaHeroiPage implements OnInit {
  retorno: any;

  constructor(/*private fb: AngularFireDatabase,*/ private rota: Router) {
    // this.retorno = fb.list('/filmes').valueChanges();
    // console.log(this.retorno);
  }

  ngOnInit() {}
}
