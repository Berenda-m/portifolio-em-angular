import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
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