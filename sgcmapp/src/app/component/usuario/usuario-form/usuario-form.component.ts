import { Component } from '@angular/core';
import { ICrudForm } from '../../i-crud-form';
import { Usuario } from '../../../model/usuario';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [],
  templateUrl: './usuario-form.component.html',
styles: ''
})
export class UsuarioFormComponent implements ICrudForm<Usuario>{
  registro: Usuario = <Usuario> {};
  save(): void {
    throw new Error('Method not implemented.');
  }

}
