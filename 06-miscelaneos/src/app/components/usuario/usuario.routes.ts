import { Routes, RouterModule } from '@angular/router';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';


export const usuario_routes: Routes = [
    { path: 'editar', component: UsuarioEditarComponent},
    { path: 'nuevo', component: UsuarioNuevoComponent},
    { path: 'detalle', component: UsuarioDetalleComponent},
    { path: '**', component: UsuarioNuevoComponent},


];



