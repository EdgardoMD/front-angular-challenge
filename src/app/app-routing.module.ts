import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'peliculas'},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'personajes', component: PersonajesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
