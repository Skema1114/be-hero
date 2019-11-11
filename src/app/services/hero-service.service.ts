import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  private privateKey = '453db515744f254357dec27ce27bd599dbe198e6';
  private publicKey = '6f20b1d3be1fedab63c26386708c4529';
  private md5 = new Md5();
  private timestamp = Number(new Date());
  private hash = Md5.hashStr(this.timestamp + this.privateKey + this.publicKey);
  private ordenarPor: string;
  private url = `https://gateway.marvel.com:443`;

  constructor(private http: HttpClient) {}

  public chamarMarvel(tipoServico: string, quantItens: number): Observable<any> {
    switch (tipoServico) {
      // #########################
      case 'personagem':
        this.ordenarPor = 'name';

        this.url += `/v1/public/characters`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&limit=${quantItens}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'quadrinho':
        this.ordenarPor = 'title';

        this.url += `/v1/public/comics`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&limit=${quantItens}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'criador':
        this.ordenarPor = 'firstName';

        this.url += `/v1/public/creators`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&limit=${quantItens}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'evento':
        this.ordenarPor = 'name';

        this.url += `/v1/public/events`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&limit=${quantItens}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'serie':
        this.ordenarPor = 'title';

        this.url += `/v1/public/series`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&limit=${quantItens}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'historia':
        this.ordenarPor = 'id';

        this.url += `/v1/public/stories`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&limit=${quantItens}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;
    }
  }

  /** SITE TUTORIAL
   *
   * Como você pode ver no método acima, para acessar a API da Marvel,
   * é preciso algumas credencias que podem ser encontradas neste link.
   * Você irá utilizá-las para criar uma hash com a seguinte estrutura:
   * (chave pública + chave privada+ timestamp) em um hash md5. Para
   * essa ação, você precisará de um módulo chamado ts-md5, que pode
   * ser baixado no portal NPM através do seguinte comando:
   */

  /** SITE MARVEL
   *
   * Authentication for Server-Side Applications
   * Server-side applications must pass two parameters in addition to the apikey parameter:
   * ts - a timestamp (or other long string which can change on a request-by-request basis)
   * hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
   * For example, a user with a public key of "1234" and a private key of "abcd" could construct
   * a valid call as follows:
   * http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
   * (the hash value is the md5 digest of 1abcd1234)
   */

  /** TESTE DE LINK FUNFANDOOOO
   * https://gateway.marvel.com/v1/public/characters?ts=1&orderBy=name&limit=10&apikey=6f20b1d3be1fedab63c26386708c4529&hash=c216406f2236ea411cdbdbb6e442154e
   */
}
