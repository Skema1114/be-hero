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
  private url: string;
  private url2: string;
  private url3: string;

  constructor(private http: HttpClient) { }

  public chamarMarvel(tipoServico: string, quantItens: number): Observable<any> {
    switch (tipoServico) {
      // #########################
      case 'personagem':
        this.ordenarPor = 'name';

        this.url = `https://gateway.marvel.com:443`;

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

        this.url = `https://gateway.marvel.com:443`;

        this.url += `/v1/public/comics`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'criador':
        this.ordenarPor = 'firstName';

        this.url = `https://gateway.marvel.com:443`;

        this.url += `/v1/public/creators`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'evento':
        this.ordenarPor = 'name';

        this.url = `https://gateway.marvel.com:443`;

        this.url += `/v1/public/events`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'serie':
        this.ordenarPor = 'title';

        this.url = `https://gateway.marvel.com:443`;

        this.url += `/v1/public/series`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;

      // #########################
      case 'historia':
        this.ordenarPor = 'id';

        this.url = `https://gateway.marvel.com:443`;

        this.url += `/v1/public/stories`;
        this.url += `?ts=${this.timestamp}`;
        this.url += `&orderBy=${this.ordenarPor}`;
        this.url += `&apikey=${this.publicKey}`;
        this.url += `&hash=${this.hash}`;

        return this.http.get(this.url);
        break;
    }
  }

  public chamarHeroi(id: number, tipoServico: string, quantItens: number): Observable<any> {
    switch (tipoServico) {
      // #########################
      case 'personagem':
        this.ordenarPor = 'name';

        this.url2 = `https://gateway.marvel.com:443`;

        this.url2 += `/v1/public/characters`;
        this.url2 += `/${id}`;
        this.url2 += `?ts=${this.timestamp}`;
        this.url2 += `&orderBy=${this.ordenarPor}`;
        this.url2 += `&limit=${quantItens}`;
        this.url2 += `&apikey=${this.publicKey}`;
        this.url2 += `&hash=${this.hash}`;

        return this.http.get(this.url2);
        break;

      // #########################
      case 'quadrinho':
        this.ordenarPor = 'title';

        this.url2 = `https://gateway.marvel.com:443`;

        this.url2 += `/v1/public/comics`;
        this.url2 += `/${id}`;
        this.url2 += `?ts=${this.timestamp}`;
        this.url2 += `&orderBy=${this.ordenarPor}`;
        this.url2 += `&apikey=${this.publicKey}`;
        this.url2 += `&hash=${this.hash}`;

        return this.http.get(this.url2);
        break;

      // #########################
      case 'criador':
        this.ordenarPor = 'firstName';

        this.url2 = `https://gateway.marvel.com:443`;

        this.url2 += `/v1/public/creators`;
        this.url2 += `/${id}`;
        this.url2 += `?ts=${this.timestamp}`;
        this.url2 += `&orderBy=${this.ordenarPor}`;
        this.url2 += `&apikey=${this.publicKey}`;
        this.url2 += `&hash=${this.hash}`;

        return this.http.get(this.url2);
        break;

      // #########################
      case 'evento':
        this.ordenarPor = 'name';

        this.url2 = `https://gateway.marvel.com:443`;

        this.url2 += `/v1/public/events`;
        this.url2 += `/${id}`;
        this.url2 += `?ts=${this.timestamp}`;
        this.url2 += `&orderBy=${this.ordenarPor}`;
        this.url2 += `&apikey=${this.publicKey}`;
        this.url2 += `&hash=${this.hash}`;

        return this.http.get(this.url2);
        break;

      // #########################
      case 'serie':
        this.ordenarPor = 'title';

        this.url2 = `https://gateway.marvel.com:443`;

        this.url2 += `/v1/public/series`;
        this.url2 += `/${id}`;
        this.url2 += `?ts=${this.timestamp}`;
        this.url2 += `&orderBy=${this.ordenarPor}`;
        this.url2 += `&apikey=${this.publicKey}`;
        this.url2 += `&hash=${this.hash}`;

        return this.http.get(this.url2);
        break;

      // #########################
      case 'historia':
        this.ordenarPor = 'id';

        this.url2 = `https://gateway.marvel.com:443`;

        this.url2 += `/v1/public/stories`;
        this.url2 += `/${id}`;
        this.url2 += `?ts=${this.timestamp}`;
        this.url2 += `&orderBy=${this.ordenarPor}`;
        this.url2 += `&apikey=${this.publicKey}`;
        this.url2 += `&hash=${this.hash}`;

        return this.http.get(this.url2);
        break;
    }
  }

  public chamarDetalhesHeroi(id: number, tipoDetalhe: string): Observable<any> {
    switch (tipoDetalhe) {
      // #########################
      case 'quadrinhos':
        this.ordenarPor = 'title';

        this.url3 = `https://gateway.marvel.com:443`;

        this.url3 += `/v1/public/characters`;
        this.url3 += `/${id}`;
        this.url3 += `/comics`;
        this.url3 += `?ts=${this.timestamp}`;
        this.url3 += `&orderBy=${this.ordenarPor}`;
        this.url3 += `&apikey=${this.publicKey}`;
        this.url3 += `&hash=${this.hash}`;
        // QUANTIDADE data.total FOR MAIOR QUE ZERO
        // TITULO data.results[].title
        // IMAGEM data.results[].thumbnail.path || data.results[].thumbnail.extension
        //https://gateway.marvel.com/v1/public/characters/1011334/comics?ts=1&limit=10&apikey=6f20b1d3be1fedab63c26386708c4529&hash=c216406f2236ea411cdbdbb6e442154e
        return this.http.get(this.url3);
        break;

      // #########################
      case 'eventos':
        this.ordenarPor = 'name';

        this.url3 = `https://gateway.marvel.com:443`;

        this.url3 += `/v1/public/characters`;
        this.url3 += `/${id}`;
        this.url3 += `/events`;
        this.url3 += `?ts=${this.timestamp}`;
        this.url3 += `&orderBy=${this.ordenarPor}`;
        this.url3 += `&apikey=${this.publicKey}`;
        this.url3 += `&hash=${this.hash}`;
        // QUANTIDADE data.total FOR MAIOR QUE ZERO
        // TITULO data.results[].title
        // IMAGEM data.results[].thumbnail.path || data.results[].thumbnail.extension

        return this.http.get(this.url3);
        break;

      // #########################
      case 'series':
        this.ordenarPor = 'title';

        this.url3 = `https://gateway.marvel.com:443`;

        this.url3 += `/v1/public/characters`;
        this.url3 += `/${id}`;
        this.url3 += `/series`;
        this.url3 += `?ts=${this.timestamp}`;
        this.url3 += `&orderBy=${this.ordenarPor}`;
        this.url3 += `&apikey=${this.publicKey}`;
        this.url3 += `&hash=${this.hash}`;
        // QUANTIDADE data.total FOR MAIOR QUE ZERO
        // TITULO data.results[].title
        // IMAGEM data.results[].thumbnail.path || data.results[].thumbnail.extension

        return this.http.get(this.url3);
        break;

      // #########################
      case 'stories':
        this.ordenarPor = 'id';

        this.url3 = `https://gateway.marvel.com:443`;

        this.url3 += `/v1/public/characters`;
        this.url3 += `/${id}`;
        this.url3 += `/stories`;
        this.url3 += `?ts=${this.timestamp}`;
        this.url3 += `&orderBy=${this.ordenarPor}`;
        this.url3 += `&apikey=${this.publicKey}`;
        this.url3 += `&hash=${this.hash}`;
        // QUANTIDADE data.total FOR MAIOR QUE ZERO
        // TITULO data.results[].title
        // IMAGEM data.results[].thumbnail.path || data.results[].thumbnail.extension

        return this.http.get(this.url3);
        break;
    }
  }
  /** TESTE DE LINK FUNFANDOOOO
   * https://gateway.marvel.com/v1/public/characters?ts=1&orderBy=name&limit=10&apikey=6f20b1d3be1fedab63c26386708c4529&hash=c216406f2236ea411cdbdbb6e442154e
   */
}
