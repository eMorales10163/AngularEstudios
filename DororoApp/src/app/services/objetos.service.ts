import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  constructor(public httpClient: HttpClient) { }

  public getObjetosList() {
    return this.httpClient.get('../../../assets/data/objetos.json');
  }
}
