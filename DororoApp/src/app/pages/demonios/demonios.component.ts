import { Component, OnInit } from '@angular/core';
import { DemonioService } from '../../services/demonio.service';
import { DemonioModel } from 'src/app/models/demonio.model';

@Component({
  selector: 'app-demonios',
  templateUrl: './demonios.component.html',
  styleUrls: ['./demonios.component.css']
})
export class DemoniosComponent implements OnInit {


  public demonios: DemonioModel [] = [];

  constructor(public demonioService: DemonioService) { }

  ngOnInit() {


    this.demonioService.getDemoniosList()
      .subscribe((response: any) => {
        this.demonios = response.demoniosList;

      });
  }

}
