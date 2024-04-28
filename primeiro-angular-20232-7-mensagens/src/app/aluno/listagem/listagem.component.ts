import { Component, OnInit } from '@angular/core';
import { ALUNOS } from "../../shared/model/ALUNOS";
import { Aluno } from "../../shared/model/aluno";
import { AlunoService } from "../../shared/services/aluno.service";
import { Router } from "@angular/router";
import { IMensagem } from 'src/app/shared/model/imensagem';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  alunos: Aluno[] = [];
  alunosPesquisa: Array<Aluno> = [];
  matriculaPesquisada: string = '';
  alunosPesquisados: Aluno[] = [];

  constructor(
    private alunoService: AlunoService,
    private roteador: Router,
    private mensagemService: IMensagem
  ) { }

  ngOnInit() {
    this.alunoService.listar().subscribe(alunosRetornados => {
      this.alunos = alunosRetornados;
    }
    );
    console.log('estou aqui');
    console.log(this.alunos);
  }

  remover(alunoARemover: Aluno): void {
    this.alunoService.remover(alunoARemover).subscribe(alunoRemovido => {
      console.log('Aluno removido');
      const indxARemover = this.alunos.findIndex(aluno =>
        aluno.matricula === alunoARemover.matricula);
      
      if (indxARemover >= 0) {
        this.alunos.splice(indxARemover, 1);
        this.mensagemService.sucesso('Aluno removido com sucesso!');
      }
    });
  }

  pesquisar() {
    this.alunoService.pesquisarPorMatricula(this.matriculaPesquisada).subscribe(alunos => {
      this.alunosPesquisados = alunos;
    });
  }

  editar(id: string): void {
    console.log('id');
    console.log(id);
    this.roteador.navigate(['edicao-aluno', id]);
  }

}
