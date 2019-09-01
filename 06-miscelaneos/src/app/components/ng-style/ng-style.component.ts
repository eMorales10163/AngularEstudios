import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="{' font-size': tamano}">
    hola esto es ngStyle
    </p>
    <button class=" btn btn-primary" (click)="tamano = tamano + 5">
    +
    </button>
    <button class=" btn btn-primary" (click)="tamano = tamano - 5">
    -
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 20;

  constructor() { }

  ngOnInit() {
  }

}
