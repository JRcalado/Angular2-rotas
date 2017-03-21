import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';



 const alunosRoutes =[
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children:[
            {path: 'novo', component: AlunoFormComponent},
            {path: ':id', component: AlunoDetalheComponent},
            {path: ':id/editar', component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
        ]
    }
 ];


@NgModule({

 imports:[RouterModule.forChild(alunosRoutes)],
 exports: [RouterModule]

})


export class AlunosRoutingModule{

}