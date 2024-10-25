import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarraComandosComponent } from '../../barra-comandos/barra-comandos.component';
import { RouterLink } from '@angular/router';
import { ICrudList } from '../../i-crud-list';
import { Usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule, BarraComandosComponent, RouterLink],
  templateUrl: './usuario-list.component.html',
  styles: ''
})
export class UsuarioListComponent implements ICrudList<Usuario>{

  constructor(private servico: UsuarioService){}

  ngOnInit(): void {
    this.get();
  }

  registros: Usuario[] = [];

  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Usuario[]) => {
        this.registros = resposta;
      }
    });
  }
  delete(id: number): void {
    if (confirm('Deseja excluir o usuário?')) {
      this.servico.delete(id).subscribe({
        complete: () => {
          this.get();
        }
      })
      
    }
  }


}
