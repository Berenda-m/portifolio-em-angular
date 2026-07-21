import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected contador = signal<number>(0);

  protected incrementar() {
    this.contador.update(valor => valor + 1);
  }

  protected botao() {
    this.contador.update(valor => valor +1);
  }

  protected zerar() {
    this.contador.set (0);
  }
}

