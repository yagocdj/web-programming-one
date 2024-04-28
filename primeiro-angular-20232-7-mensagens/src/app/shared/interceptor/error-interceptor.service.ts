import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { IMensagem } from "../model/imensagem";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private mensagemService: IMensagem) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((erro: HttpErrorResponse) => this.processarErroResposta(erro)));
  }

  private processarErroResposta(erro: HttpErrorResponse): Observable<HttpEvent<any>> {
    if (erro instanceof HttpErrorResponse) {
      this.mensagemService.erro(erro.message);
    }
    return throwError(() => erro);
  }

}
