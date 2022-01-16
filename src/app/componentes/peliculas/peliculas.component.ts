import { Component, OnInit } from '@angular/core';
import { PeliculaSerie } from 'src/app/modelos/pelicula-serie';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  titulo = 'Listado peliculas y series';
  peliculas: PeliculaSerie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
