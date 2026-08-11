import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./componentes/header/header";
import { Home } from './componentes/home/home';
import { Footer } from './componentes/footer/footer';
import { Contato } from './componentes/contato/contato';
import { Projetos } from './componentes/projetos/projetos';
import { SideBar } from './componentes/side-bar/side-bar';
import { Login } from './componentes/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('portifolio-em-angular');
}
