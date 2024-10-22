import { Component } from '@angular/core';
import { ICrudForm } from '../../i-crud-form';
import { Atendimento } from '../../../model/atendimento';
import { FormsModule } from '@angular/forms';
import { Convenio } from '../../../model/convenio';
import { Paciente } from '../../../model/paciente';
import { Profissional } from '../../../model/profissional';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AtendimentoService } from '../../../service/atendimento.service';
import { ConvenioService } from '../../../service/convenio.service';
import { PacienteService } from '../../../service/paciente.service';
import { ProfissionalService } from '../../../service/profissional.service';

@Component({
  selector: 'app-agenda-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './agenda-form.component.html',
  styles: ``
})
export class AgendaFormComponent implements ICrudForm<Atendimento>{

  constructor(
    private servico: AtendimentoService,
    private servicoConvenio: ConvenioService,
    private servicoPaciente: PacienteService,
    private servicoProfissional: ProfissionalService,
    private router: Router,
    private rota: ActivatedRoute
  ) {}


  registro: Atendimento = <Atendimento>{};
  convenios: Convenio[] =[];
  pacientes: Paciente[] = [];
  profissionais: Profissional[] = [];

  compareById = (a: any, b: any) => {
    return a && b && a.id == b.id;
  }

  ngOnInit(): void {

    this.servicoConvenio.get().subscribe({
      next:(resposta: Convenio[]) =>{
        this.convenios = resposta;
      }
    })

    this.servicoPaciente.get().subscribe({
      next:(resposta: Paciente[]) =>{
        this.pacientes = resposta;
      }
    })

    this.servicoProfissional.get().subscribe({
      next: (resposta: Profissional[]) =>{
        this.profissionais = resposta;
      }
    })
    
    const id = this.rota.snapshot.queryParamMap.get('id');
    if (id) {
      this.servico.getById(+id).subscribe({
        next: (resposta: Atendimento) =>{
          this.registro = resposta;
        }
      });
    }

  }

  save(): void {
    this.servico.save(this.registro).subscribe({
      complete: () => {
        this.router.navigate(['/agenda-list']);
        alert('Operação realizada com suceso!');
      }
    });
  }
}
