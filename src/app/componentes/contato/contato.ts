import { Component, signal } from '@angular/core';
import { Formulario } from '../formulario/formulario';
import { GetUsuario } from "../get-usuario/get-usuario";
import { PostUsuario } from "../post-usuario/post-usuario";

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [Formulario, GetUsuario, PostUsuario],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  protected usuario = signal ('deslogado')
  protected botao= signal('entrar')

  protected logado() {
    if (this.usuario() === 'logado') {
      this.usuario.set('deslogado');
      this.botao.set('entrar');
    } else {
      this.usuario.set ('logado');
      this.botao.set('sair')
    }
  }
}