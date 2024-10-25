import { Injectable } from '@angular/core';
import { ICrudService } from './i-crud-service';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Especialidade } from '../model/especialidade';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements ICrudService<Usuario>{

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/config/usuario';

  get(termoBusca?: string): Observable<Usuario[]> {
    let url = this.apiUrl + '/consultar';
    if (termoBusca) {
      url += "?termoBusca=" + termoBusca;
    }
    return this.http.get<Usuario[]>(url);
  }

  getById(id: number): Observable<Usuario> {
    let url = this.apiUrl + '/' + id;
    return this.http.get<Usuario>(url);
  }
  save(objeto: Usuario): Observable<Usuario> {
    let url = this.apiUrl;
    if (objeto.id) {
      url += '/atualizar'
      return this.http.put<Usuario>(url, objeto);
    }
    url += '/inserir';
    return this.http.post<Usuario>(url, objeto);
  }
  delete(id: number): Observable<void> {
    let url = this.apiUrl + '/remover/' + id;
    return this.http.delete<void>(url);
  }
}
