import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  data: any;

  constructor(private http: HttpClient) {}

load() {
  if (this.data) {
    return Promise.resolve(this.data);
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

  return new Promise(resolve => {
    const privateKey = '453db515744f254357dec27ce27bd599dbe198e6';
    const publicKey = '6f20b1d3be1fedab63c26386708c4529';

    const md5 = new Md5();
    const timestamp = Number(new Date());

    const hash = Md5.hashStr(timestamp + privateKey + publicKey);

    let url = `https://gateway.marvel.com:443/v1/public/characters?`;
    url += `ts=${timestamp}&orderBy=name&limit=10&`;
    url += `apikey=${publicKey}&hash=${hash}`;

    this.http.get(url);
    });

    /* ERA PRA SER ASSIM, MAS DA ERRO NO '.MAP'

      this.http.get(url).map(res => res.json()).subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    */
  }









  }

  /*
  public chamarHeroi(heroi: string): Observable<any> {
    const api = 'defdef';
    let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${api}`;
    // ALTERA O PADRAO PARA CELCIUS
    url += '&units=metric';
    // DEFINE O IDIOMA
    url += '&lang=pt';
    return this.http.get(url);
  }
  */
}
