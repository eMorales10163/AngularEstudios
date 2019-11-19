import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemonioService {

  constructor(public httpClient: HttpClient) { }

  public getDemoniosList() {
    return this.httpClient.get('../../../assets/data/demonios.json');
  }
}
