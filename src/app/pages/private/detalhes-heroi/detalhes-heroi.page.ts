import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-heroi',
  templateUrl: './detalhes-heroi.page.html',
  styleUrls: ['./detalhes-heroi.page.scss'],
})
export class DetalhesHeroiPage implements OnInit {
  // idHeroi

  constructor(private rotaLink: ActivatedRoute) {
    console.log('AQUIIII' + rotaLink.snapshot.data.idHeroi);
  }

  ngOnInit() {
  }

}
