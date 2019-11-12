import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

interface User {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user: User = {
    email: 'aaa@aaa.aaa',
    senha: '123456'
  };

  constructor(public afAuth: AngularFireAuth) { }

  // REFERENCIAS: https://www.youtube.com/watch?v=Du6hrnod0IE

  async criarConta() {
    const user = await this.afAuth.auth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.senha,
    );
    console.log(user);
  }

  async login() {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.senha,
    );
    console.log(user);
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
