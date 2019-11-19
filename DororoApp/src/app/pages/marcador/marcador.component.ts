import { Component, OnInit } from '@angular/core';
import { DemonioService } from '../../services/demonio.service';
import { DemonioModel } from 'src/app/models/demonio.model';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  public demonios: DemonioModel[] = [];

  constructor(public demonioService: DemonioService) { }

  ngOnInit() {
    this.demonioService.getDemoniosList()
      .subscribe((response: any) => {
        this.demonios = response.demoniosList;
      });
  }

}
