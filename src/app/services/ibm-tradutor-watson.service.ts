import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IbmTradutorWatsonService {

  constructor(private http: HttpClient) { }

  public traduzir(txt): Observable<any> {
    const formData = new FormData();
    formData.append('string', txt);

    const url = `https://tradutor-watson.herokuapp.com/traduzir`;
    return this.http.post(url, formData);
  }
}
