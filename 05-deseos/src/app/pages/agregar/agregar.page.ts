import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;

  constructor(private deseosService: DeseosService, private router: ActivatedRoute) {
    const listaId = this.router.snapshot.paramMap.get('listaId');
   }

  ngOnInit() {
    this.lista = this.deseosService.obtenerLista( listaId );
  }

}
