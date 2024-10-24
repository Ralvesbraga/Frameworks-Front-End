import { Routes } from '@angular/router';
import { AgendaListComponent } from './component/agenda/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './component/agenda/agenda-form/agenda-form.component';
import { AtendimentoComponent } from './component/atendimento/atendimento.component';
import { EspecialidadeListComponent } from './component/especialidade/especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './component/especialidade/especialidade-form/especialidade-form.component';
import { UsuarioListComponent } from './component/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './component/usuario/usuario-form/usuario-form.component';

export const routes: Routes = [
    { path: 'agenda-list', component: AgendaListComponent},
    { path: 'agenda-form', component: AgendaFormComponent},
    { path: 'atendimento', component: AtendimentoComponent},
    { path: 'config/especialidade-list', component: EspecialidadeListComponent},
    { path: 'config/especialidade-form', component: EspecialidadeFormComponent},
    { path: 'config/usuario-list', component: UsuarioListComponent},
    { path: 'config/usuario-form', component: UsuarioFormComponent}
];
