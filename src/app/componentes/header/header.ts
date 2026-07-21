import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected contador: number = 0;

  protected incrementar() {
    this.contador++;
  }

  protected botao() {
    this.contador++;
  }

  protected zerar() {
    this.contador = 0;
  }
}

