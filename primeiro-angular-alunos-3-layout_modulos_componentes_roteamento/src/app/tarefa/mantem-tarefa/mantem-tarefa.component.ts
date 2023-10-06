import { Component } from '@angular/core';
import {Tarefa} from "../../shared/modelo/tarefa";
import {TAREFAS} from "../../shared/modelo/TAREFAS";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-mantem-tarefa',
  templateUrl: './mantem-tarefa.component.html',
  styleUrls: ['./mantem-tarefa.component.css']
})
export class MantemTarefaComponent {
  tarefa: Tarefa;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  tarefas = TAREFAS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.tarefa = new Tarefa();
    this.nomeBotaoManutencao = 'Salvar';
  }

  manter(): void {
    if (this.estahCadastrando && this.tarefa) {
      this.tarefas.push(this.tarefa);
    }
    this.tarefa = new Tarefa();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemTarefas']);
  }
}
