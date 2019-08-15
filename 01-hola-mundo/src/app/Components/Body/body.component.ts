import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje: 'Fus Ro Dah',
    autor: 'Dovakhiin'
  };

  personajes: string[] = ['Lydia', 'Aela', 'Balgruff']
}
