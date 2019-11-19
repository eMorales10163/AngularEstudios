import { Component, OnInit } from '@angular/core';
import { ObjetosService } from '../../services/objetos.service';
import { DororoModel } from 'src/app/models/dororo.model';

@Component({
  selector: 'app-dororo',
  templateUrl: './dororo.component.html',
  styleUrls: ['./dororo.component.css']
})
export class DororoComponent implements OnInit {

  public objetos: DororoModel [] = [];

  constructor(public objetosService: ObjetosService) { }

  ngOnInit() {
    this.objetosService.getObjetosList()
      .subscribe((response: any) => {
        this.objetos = response.objetosList;
      });
  }

}
