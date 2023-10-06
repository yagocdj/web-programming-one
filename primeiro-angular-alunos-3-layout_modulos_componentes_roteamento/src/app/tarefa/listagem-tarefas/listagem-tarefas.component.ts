import { Component } from '@angular/core';
import {TAREFAS} from "../../shared/modelo/TAREFAS";
import {Tarefa} from "../../shared/modelo/tarefa";

@Component({
  selector: 'app-listagem-tarefas',
  templateUrl: './listagem-tarefas.component.html',
  styleUrls: ['./listagem-tarefas.component.css']
})
export class ListagemTarefasComponent {
  tarefas = TAREFAS;

  excluir(usuarioARemover: Tarefa): void {
    const indx = this.tarefas.findIndex(tarefa =>
      tarefa.titulo === usuarioARemover.titulo);

    this.tarefas.splice(indx, 1);
  }
}
