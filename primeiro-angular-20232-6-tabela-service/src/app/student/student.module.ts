import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FormsModule } from "@angular/forms";
import { PipesModule } from "../shared/pipes/pipes.module";
import { MaterialModule } from "../layout/material/material.module";
import { SignupListComponent } from './signup-list/signup-list.component';
import { FlexModule } from "@angular/flex-layout";
import { LayoutModule } from "../layout/layout/layout.module";
import { RouterModule } from "@angular/router";
import { ListTableComponent } from './list-table/list-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CrudComponent,
    ListagemComponent,
    SignupListComponent,
    ListTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    MaterialModule,
    FlexModule,
    LayoutModule,
    RouterModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    CrudComponent,
    ListagemComponent,
    SignupListComponent,
    ListTableComponent
  ]
})
export class StudentModule { }
