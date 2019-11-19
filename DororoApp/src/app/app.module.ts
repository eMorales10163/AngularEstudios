import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DororoComponent } from './pages/dororo/dororo.component';
import { DemoniosComponent } from './pages/demonios/demonios.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { ActiveBlockedPipe } from './pipes/active-blocked.pipe';
import { NavbarComponent } from './theme/components/navbar/navbar.component';
import { ActiveBlockedVivoPipe } from './pipes/active-blocked-vivo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DororoComponent,
    DemoniosComponent,
    MarcadorComponent,
    ActiveBlockedPipe,
    NavbarComponent,
    ActiveBlockedVivoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
