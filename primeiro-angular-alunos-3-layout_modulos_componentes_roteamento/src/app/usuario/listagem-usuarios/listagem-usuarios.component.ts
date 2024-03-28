import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {

  usuarios: Array<Usuario> = new Array<Usuario>();
  title = 'Listagem de usuários'

  constructor(private usuarioService: UsuarioService) { }
  excluir(usuarioARemover: Usuario): void {
    const indx = this.usuarios.findIndex(usuario =>
      usuario.cpf === usuarioARemover.cpf);

    if (indx > -1) {
      this.usuarios.splice(indx, 1);
    }
  }

  ngOnInit() {
    // eu me inscrevi no observable
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  alterarTitle(novoTitle: string): void {
    this.title = novoTitle;
  }

}
