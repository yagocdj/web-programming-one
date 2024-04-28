import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Aluno} from "../model/aluno";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  ALUNO_API = 'http://localhost:3000/alunos';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.ALUNO_API);
  }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(this.ALUNO_API, aluno);
  }

  remover(aluno: Aluno): Observable<any> {
    return this.httpClient.delete(`${this.ALUNO_API}/${aluno.id}`);
  }

  pesquisarPorId(id: string): Observable<Aluno> {
    return this.httpClient.get<Aluno>(`${this.ALUNO_API}/${id}`);
  }
}
