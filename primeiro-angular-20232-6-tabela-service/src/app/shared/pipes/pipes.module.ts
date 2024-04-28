import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatriculaPipe} from "./matricula.pipe";
import { CpfPipe } from './cpf.pipe';



@NgModule({
  declarations: [MatriculaPipe, CpfPipe],
  imports: [
    CommonModule
  ],
  exports: [MatriculaPipe, CpfPipe]
})
export class PipesModule { }
