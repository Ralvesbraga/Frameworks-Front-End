import { Component } from '@angular/core';
import { ICrudList } from '../../i-crud-list';
import { Especialidade } from '../../../model/especialidade';

@Component({
  selector: 'app-especialidade-list',
  standalone: true,
  imports: [],
  templateUrl: './especialidade-list.component.html',
styles: ''
})
export class EspecialidadeListComponent  implements ICrudList<Especialidade>{

  registros: Especialidade[] = [];
  
  get(termoBusca?: string): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

}
