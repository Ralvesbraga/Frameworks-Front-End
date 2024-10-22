import { Component } from '@angular/core';
import { ICrudList } from '../i-crud-list';
import { Atendimento } from '../../model/atendimento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atendimento.component.html',
  styles: ``
})

export class AtendimentoComponent implements ICrudList<Atendimento> {

  ngOnInit(): void {
    fetch("./assets/atendimentos.json")
    .then(resposta => resposta.json())
    .then(dados => {this.registros = dados;});
  }

  registros: Atendimento[] = [];

  get(termoBusca?: string): void {
    throw new Error('Method not implemented.');
  }

  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

}