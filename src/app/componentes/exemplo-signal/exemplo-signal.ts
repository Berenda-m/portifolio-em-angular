import { Component, signal } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {

   protected usuario= signal <Usuario> ({
    id: 1,
    nome: 'Brenda',
    idade: 28
  });
}
