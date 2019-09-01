import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
//import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
