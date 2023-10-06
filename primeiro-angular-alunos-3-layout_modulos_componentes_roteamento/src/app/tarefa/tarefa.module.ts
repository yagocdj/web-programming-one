import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantemTarefaComponent } from './mantem-tarefa/mantem-tarefa.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import { ListagemTarefasComponent } from './listagem-tarefas/listagem-tarefas.component';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterLink, RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {PipesModule} from "../pipes/pipes.module";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    MantemTarefaComponent,
    ListagemTarefasComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    PipesModule,
    FlexModule
  ],
  exports: [
    MantemTarefaComponent,
    ListagemTarefasComponent
  ]
})
export class TarefaModule { }
