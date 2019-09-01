import { Component,
  OnInit,
  OnChanges,
  DoCheck,
   AfterContentInit,
    AfterContentChecked,
     AfterViewInit,
      AfterViewChecked,
       OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style>
     <app-css></app-css>
     <app-clases></app-clases>
    <p [appResaltado]="'orange'">
        Hola mundo
      <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit
          ,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  OnChanges() {
  }
  DoCheck() {

  }
  AfterContentInit() {

  }
  AfterContentChecked() {

  }

AfterViewInit() {

}
AfterViewChecked() {

}
OnDestroy() {

}




}
