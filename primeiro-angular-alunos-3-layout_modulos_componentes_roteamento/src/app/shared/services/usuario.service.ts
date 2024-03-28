import { Injectable } from '@angular/core';
import {Usuario} from "../modelo/usuario";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly URL_USUARIOS = 'http://localhost:3000/usuarios/';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Usuario[]> {  // prometo que vou me comunicar com o servidor
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  inserir(usuario: Usuario): Observable<Usuario> {  // prometo que vou me comunicar com o servidor
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  localizar(cpf: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.URL_USUARIOS + cpf);
  }
}
