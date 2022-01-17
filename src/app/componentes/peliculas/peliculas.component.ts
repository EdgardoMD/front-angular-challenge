import { Component, OnInit } from '@angular/core';
import { PeliculaSerie } from 'src/app/modelos/pelicula-serie';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import Swal from 'sweetalert2';

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

  public eliminar(pelicula: PeliculaSerie): void {

    Swal.fire({
      title: 'Precaución:',
      text: `Seguro que desea eliminar la película ${pelicula.titulo} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(pelicula.id).subscribe(() => {
          Swal.fire('Eliminada:', `Pelicula ${pelicula.titulo} fue eliminada con éxito`, 'success');
        });
      }
    });

  }

}
