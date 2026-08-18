import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {

  contador = signal<number>(0);

  incrementar() {
    this.contador.update(valor => valor + 1);
  }

  botao() {
    this.contador.update(valor => valor +1);
  }

  zerar() {
    this.contador.set (0);
  }

}
