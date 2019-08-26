import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

// paises: any [] = [];

nuevasCanciones: any [] = [];
loading: boolean;

error: boolean;
mensajeError: string;


constructor(private SpotifyService: SpotifyService) {

  this.error = false;
  this.loading = true;

  this.SpotifyService.getNewReleases()
  .subscribe( (response: any) => {
    this.nuevasCanciones = response;
    this.loading = false;
  }, ( ResponseError ) => {
    this.loading = false;
    this.error = true;
    this.mensajeError = ResponseError.error.error.message;
  }
  );

  // constructor(private http: HttpClient) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe((response: any) => {
      // this.paises = response;
      // console.log(response);
    // });
   }
  ngOnInit() {
  }

}
