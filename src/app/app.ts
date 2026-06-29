import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Home } from './componentes/home/home';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portifolio-em-angular');
}
