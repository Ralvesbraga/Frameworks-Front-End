import { Component } from '@angular/core';
import { ICrudForm } from '../../i-crud-form';
import { Especialidade } from '../../../model/especialidade';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EspecialidadeService } from '../../../service/especialidade.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-especialidade-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './especialidade-form.component.html',
  styles: ''
})
export class EspecialidadeFormComponent implements ICrudForm<Especialidade>{

  constructor(
    private servico: EspecialidadeService,
    private router: Router,
    private rota: ActivatedRoute
  ){}
  
  registro: Especialidade = <Especialidade> {};
  
  compareById = (a: any, b: any) => {
    return a && b && a.id == b.id;
  }


  compareById = (a: any, b: any) => {
    return a && b && a.id == b.id;
  }

  ngOnInit(): void{
    const id = this.rota.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Especialidade) => {
          this.registro = resposta;
        }
      });
    }
  }

  save(): void {
    this.servico.save(this.registro).subscribe({
      complete: () => {
        this.router.navigate(['/especialidade-list']);
        alert('Operação realizada com sucesso!');
      }
    })
  }

}
