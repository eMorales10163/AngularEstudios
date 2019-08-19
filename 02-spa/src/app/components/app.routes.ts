import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroe/heroe.component';
import { BusquedaHeroeComponent } from './busqueda-heroe/busqueda-heroe.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'about', component: AboutComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'busqueda/:termino', component: BusquedaHeroeComponent},
    { path: '**' , pathMatch: 'full', redirectTo: 'home'}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
