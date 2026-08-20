import { Injectable, signal } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  
   readonly usuario = signal<Usuario[]>([

    {
      id: 1,
      nome: 'Brenda',
      idade: 28
    },
    {
      id: 2,
      nome: 'Otto',
      idade: 6
    },
  {
    id: 3,
    nome: 'Max',
    idade: 4
  },
  {
    id: 4,
    nome: 'Yuri',
    idade: 39
  }
  ]);

}

