import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {



  private alunos: any[] =[];


  constructor(
     
    private alunosService: AlunosService
    ) { }

  ngOnInit() {
    
   

    this.alunos = this.alunosService.getAlunos();

  }

}
