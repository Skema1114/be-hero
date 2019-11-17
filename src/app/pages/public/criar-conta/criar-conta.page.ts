import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {
  usuario: Usuario;

  constructor(private ls: LoginService) {
    this.usuario = new Usuario();
  }

  public cadastrar(): void {
    this.ls.criarNovoUsuario(this.usuario);
  }

  ngOnInit() { }
}