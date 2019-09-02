import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';


const ROUTES: Routes = [
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: '**', pathMatch: 'full' , redirectTo: 'heroes'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
