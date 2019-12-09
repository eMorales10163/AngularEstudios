import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
// tslint:disable-next-line: import-blacklist
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '80b5c6fca3fa1a2a2796fd9331e903c6';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  // tslint:disable-next-line: deprecation
  constructor(private jsonp: Jsonp) { }

  getPopulares() {

    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(res => res.json().results));
  }

  buscarPelicula(texto) {

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(res => {
        this.peliculas = res.json().results;
        return res.json().results;
      }));
  }

  getPopularesNinos() {

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(res => res.json().results));
  }

  getCartelera() {
    // tslint:disable-next-line: max-line-length
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 14);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${this.apiKey}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(res => res.json().results));
  }

  getPelicula(id: string) {
    const url = `${this.urlMoviedb}/movie/${ id }?&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .pipe(map(res => res.json()));

  }

}
