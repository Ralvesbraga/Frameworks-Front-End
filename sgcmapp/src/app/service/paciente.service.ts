import { Injectable } from '@angular/core';
import { ICrudService } from './i-crud-service';
import { Paciente } from '../model/paciente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PacienteService implements ICrudService<Paciente>{

  constructor(
    private http: HttpClient
  ) { }
  
  get(termoBusca?: string): Observable<Paciente[]> {
    let url = this.apiUrl + '/consultar';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Paciente[]>(url);
  }
  getById(id: number): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }
  save(objeto: Paciente): Observable<Paciente> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
  apiUrl: string = environment.API_URL + '/paciente';

  
}
