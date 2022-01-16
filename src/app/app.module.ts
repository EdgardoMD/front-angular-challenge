import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { PeliculasFormComponent } from './componentes/peliculas/peliculas-form/peliculas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PersonajesComponent,
    NavbarComponent,
    PeliculasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
