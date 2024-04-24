import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api : string = 'http://localhost:8080/api/clientes';
  private api2 : string = 'http://localhost:8080/api/clientes/create';

  constructor(private http:HttpClient) { }

  getClienteList():Observable<Cliente []> {
    return this.http.get<Cliente[]>(this.api);
  }

  createCliente(cliente : Cliente):Observable<Cliente> {
    return this.http.post<Cliente>(this.api2,cliente);
  }

  deleteClienteById(id : number):Observable<any>{
    return this.http.delete(this.api+'/'+id);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.api + '/' + id);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.api, cliente);
  }
}
