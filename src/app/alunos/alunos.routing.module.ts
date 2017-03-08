import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';



 const alunosRoutes =[
    {path: 'alunos', component: AlunosComponent},
    {path: 'alunos/:id', component: AlunoDetalheComponent},
    {path: 'alunos/:id/editar', component: AlunoFormComponent},
    {path: 'alunos/novo', component: AlunoFormComponent}


 ];


@NgModule({

 imports:[RouterModule.forChild(alunosRoutes)],
 exports: [RouterModule]

})


export class AlunosRoutingModule{

}