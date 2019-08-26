import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization:  'Bearer BQBk6vaUJhDkE-ScTVOr6LJVRNfLOSjedFCODUibMgCt38QzRSD3a0LQc7BTsXTTxtp1NK723KzaaYiA3oo'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map ( response => response['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }%20&type=artist`)
    .pipe( map ( response => response['artists'].items));
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
    // .pipe( map ( response => response['artists'].items));
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe ( map (response => response['tracks']) );
  }
  }


