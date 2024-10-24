import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Atendimento } from '../../model/atendimento';
import { BarraComandosComponent } from '../barra-comandos/barra-comandos.component';
import { ICrudList } from '../i-crud-list';
import { AtendimentoService } from '../../service/atendimento.service';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [BarraComandosComponent, CommonModule],
  templateUrl: './atendimento.component.html',
  styles: ``
})
export class AtendimentoComponent implements ICrudList<Atendimento> {

  constructor(
    private servico: AtendimentoService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  registros: Atendimento[] = [];

  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

  get(termoBusca?: string | undefined): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Atendimento[]) => {
        this.registros = resposta.filter(item => {
          return ['CHEGADA', 'ATENDIMENTO'].includes(item.status);
        })
        .filter(item => {
          let data = new Date().setHours(0,0,0,0);
          let hoje = new Date(data).toISOString().split('T')[0];
          return item.data == hoje;
        });
      }
    });
  }

}
