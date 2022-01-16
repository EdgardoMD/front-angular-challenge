import { Component, OnInit } from '@angular/core';
import { PeliculaSerie } from 'src/app/modelos/pelicula-serie';
import { PeliculaService } from 'src/app/servicios/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  titulo = 'Listado peliculas y series';
  peliculas: PeliculaSerie[] = [];

  constructor(private service: PeliculaService) { }

  ngOnInit() {

    this.service.listar().subscribe(peliculas => this.peliculas = peliculas)
  }

}
