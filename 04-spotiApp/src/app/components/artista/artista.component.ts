import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any [] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
    this.loading = true;
    this.getArtista (params['id']);
    this.getTopTracks (params['id']);

    });
   }
  getArtista( id: string ) {

  this.loading = true;

  this.spotify.getArtista( id )
  .subscribe ( response => {
    console.log(response);
    this.artista = response;

    this.loading = false;
  });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks( id )
    .subscribe ( response => {
    this.topTracks = response;
    console.log(this.topTracks);
    });
  }

}
