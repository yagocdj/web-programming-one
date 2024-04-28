import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptorService } from "./error-interceptor.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // provider - se alguém me pedir alguma coisa com token, o angular precisa saber
  // o que injetar

  // quem fornece esse serviço quando ele precisa ser injetado?
  providers: [
    {
      // se alguém me pedir para injetar um HTTP_INTERCEPTOR
      provide: HTTP_INTERCEPTORS,
      // use a classe ErrorInterceptorService
      useClass: ErrorInterceptorService,
      // multi tratadores
      multi: true
    }
  ]
})
export class InterceptorModule { }
