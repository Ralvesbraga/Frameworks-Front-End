import { Injectable } from '@angular/core';
import { ICrudService } from './i-crud-service';
import { Profissional } from '../model/profissional';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService implements ICrudService<Profissional>{

  constructor(
    private http: HttpClient
  ) { }
  apiUrl: string = environment.API_URL + '/profissional';

  get(termoBusca?: string): Observable<Profissional[]> {
    let url = this.apiUrl + '/consultar';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Profissional[]>(url);
  }

  getById(id: number): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  save(objeto: Profissional): Observable<Profissional> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
