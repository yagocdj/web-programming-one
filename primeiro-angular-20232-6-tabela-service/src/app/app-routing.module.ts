import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./student/listagem/listagem.component";
import {CrudComponent} from "./student/crud/crud.component";
import {SignupListComponent} from "./student/signup-list/signup-list.component";
import {ListTableComponent} from "./student/list-table/list-table.component";

const routes: Routes = [
  {
    path: "list-students",
    component: ListagemComponent
  },
  {
    path: "register-student",
    component: CrudComponent
  },
  {
    path: "update-student/:id",
    component: CrudComponent
  },
  {
    path: "register-list-students",
    component: SignupListComponent
  },
  {
    path: "list-table",
    component: ListTableComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
