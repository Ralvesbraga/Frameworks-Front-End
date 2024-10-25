import { Component } from '@angular/core';
import { ICrudForm } from '../../i-crud-form';
import { Usuario } from '../../../model/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './usuario-form.component.html',
styles: ''
})
export class UsuarioFormComponent implements ICrudForm<Usuario>{

  constructor(
    private servico: UsuarioService,
    private router: Router,
    private rota: ActivatedRoute
  ) {}

  registro: Usuario = <Usuario> {};

  compareById = (a: any, b: any) => {
    return a && b && a.id == b.id;
  }
  
  ngOnInit(): void{
    const id = this.rota.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Usuario) => {
          this.registro = resposta;
        }
      })
    }
  }

  save(): void {
    this.servico.save(this.registro).subscribe({
      complete: () => {
        this.router.navigate(['/usuario-list'])
        alert('Operação realizada com sucesso!')
      }
    })
  }

}
