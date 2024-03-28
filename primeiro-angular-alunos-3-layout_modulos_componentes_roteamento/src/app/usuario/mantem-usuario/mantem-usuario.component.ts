import { Component } from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'app-mantem-usuario',
  templateUrl: './mantem-usuario.component.html',
  styleUrls: ['./mantem-usuario.component.css']
})
export class MantemUsuarioComponent {

  usuarioDeManutencao: Usuario;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';
  usuarios: Array<Usuario> = new Array<Usuario>();

  constructor(private rotaAtual: ActivatedRoute,
              private roteador: Router,
              private usuarioService: UsuarioService) {
    this.usuarioDeManutencao = new Usuario('', 0);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      // const usuarioEncontrado = this.usuarios.find(
      //   usuario => usuario.cpf === idParaEdicao);
      const usuarioEncontrado = this.usuarioService.localizar(idParaEdicao);
      if (usuarioEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.usuarioDeManutencao = usuarioEncontrado.;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.usuarioDeManutencao) {
      this.usuarioService.inserir(this.usuarioDeManutencao).subscribe(
        usuario => console.log(usuario)
      );
    }
    this.usuarioDeManutencao = new Usuario();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemusuarios']);
  }

}
