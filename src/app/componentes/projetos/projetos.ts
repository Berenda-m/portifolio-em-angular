import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {

  texto: string = '';
}
