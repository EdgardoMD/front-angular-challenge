import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PeliculaSerie } from '../modelos/pelicula-serie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private endPoint = 'http://localhost:8095/movies';

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  editar: any;


  constructor(private http: HttpClient) { }

  public listar(): Observable<PeliculaSerie[]> {
    
    return this.http.get<PeliculaSerie[]>(this.endPoint);
  }

  public ver(id: number): Observable<PeliculaSerie>{
    return this.http.get<PeliculaSerie>(`${this.endPoint}/${id}`);
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.endPoint}/${id}`);   
  }
}
