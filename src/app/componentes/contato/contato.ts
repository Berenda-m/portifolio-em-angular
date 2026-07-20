import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  usuario = ''
  botao= ''

  logado() {
    if (this.usuario === 'logado') {
      this.usuario = 'deslogado';
      this.botao= 'entrar'
    } else{
      this.usuario = 'logado';
      this.botao = 'sair'
    }
  }
}