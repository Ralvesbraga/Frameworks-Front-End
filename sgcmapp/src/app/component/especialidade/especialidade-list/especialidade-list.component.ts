import { Component } from '@angular/core';
import { ICrudList } from '../../i-crud-list';
import { Especialidade } from '../../../model/especialidade';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BarraComandosComponent } from '../../barra-comandos/barra-comandos.component';
import { EspecialidadeService } from '../../../service/especialidade.service';

@Component({
  selector: 'app-especialidade-list',
  standalone: true,
  imports: [CommonModule, RouterLink, BarraComandosComponent],
  templateUrl: './especialidade-list.component.html',
styles: ''
})
export class EspecialidadeListComponent  implements ICrudList<Especialidade>{

  constructor(private servico: EspecialidadeService){
  }

  ngOnInit(): void{
    this.get();
  }

  registros: Especialidade[] = [];
  
  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Especialidade[]) => {
        this.registros = resposta
      }
    })
  }
  delete(id: number): void {
    if (confirm('Deseja excluir a especialidade?')) {
      this.servico.delete(id).subscribe({
        complete: () => {
          this.get();
        }
      })
    }
  }

}
