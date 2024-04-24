import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private api : string = 'http://localhost:8082/api/cursos';
  private api2 : string = 'http://localhost:8082/api/cursos/create';

  constructor(private http:HttpClient) { }

  getCursoList():Observable<Curso []> {
    return this.http.get<Curso[]>(this.api);
  }

  createCurso(curso : Curso):Observable<Curso> {
    return this.http.post<Curso>(this.api2,curso);
  }

  deleteCursoById(id : number):Observable<any> {
    return this.http.delete(this.api+'/'+id);
  }

  getCursoById(id : number):Observable<Curso> {
    return this.http.get<Curso>(this.api+'/'+id)
  }

  updateCurso(curso : Curso):Observable<Curso> {
    return this.http.put<Curso>(this.api,curso);
  }
}
