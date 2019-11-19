import { Routes, RouterModule, Router } from '@angular/router';
import { DemoniosComponent } from './pages/demonios/demonios.component';
import { DororoComponent } from './pages/dororo/dororo.component';
import { HomeComponent } from './pages/home/home.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'demonio', component: DemoniosComponent },
  { path: 'dororo', component: DororoComponent },
  { path: 'marcador', component: MarcadorComponent},
  { path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
