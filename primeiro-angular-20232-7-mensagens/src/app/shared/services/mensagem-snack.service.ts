import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {IMensagem} from "../model/imensagem";

@Injectable({
  providedIn: 'root'
})
export class MensagemSnackService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  sucesso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['success']);
  }

  erro(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['error']);
  }

  info(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['info']);
  }

  alerta(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['warning']);
  }

  /**
   * Este método configura uma snack bar e a abre com uma mensagem de sucesso, erro, aviso ou
   * informação.
   * @param mensagem - uma string que representa a mensagem a ser exibida.
   * @param extraClasses - classes de estilo CSS que serão utilizadas para estilizar o "alert"
   * a depender do seu tipo.
   */
  private abrirSnackBar(mensagem: string, extraClasses: string[]): void {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = extraClasses;
    this.snackBar.open(mensagem, 'X', config);
  }

}
