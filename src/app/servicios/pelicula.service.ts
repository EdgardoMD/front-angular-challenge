import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaSerie } from '../modelos/pelicula-serie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private endPoint = 'http://localhost:8095/movies';


  constructor(private http: HttpClient) { }

  public listar(): Observable<PeliculaSerie[]> {
    
    return this.http.get<PeliculaSerie[]>(this.endPoint);
  }
}
