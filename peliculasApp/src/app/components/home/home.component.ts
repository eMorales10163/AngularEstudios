import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public peliculasService: PeliculasService) {

    this.peliculasService.getCartelera()
      .subscribe((response: any) => {
        this.cartelera = response;
      });

    this.peliculasService.getPopulares()
      .subscribe((response: any) => {
        this.populares = response;
      });

    this.peliculasService.getPopularesNinos()
      .subscribe((response: any) => {
        this.popularesNinos = response;
      });
  }

  ngOnInit() {
  }

}
