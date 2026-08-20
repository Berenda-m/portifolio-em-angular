import { Component, inject, signal } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios-service';

@Component({
  selector: 'app-exemplo-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exemplo-signal.html',
  styleUrl: './exemplo-signal.css',
})
export class ExemploSignal {

  protected readonly usuariosService =  inject (UsuariosService);



}
