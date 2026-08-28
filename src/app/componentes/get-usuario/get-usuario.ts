import { Component, inject } from '@angular/core';
import { GetUsuarioService } from './get-usuario-service';

@Component({
  selector: 'app-get-usuario',
  imports: [],
  templateUrl: './get-usuario.html',
  styleUrl: './get-usuario.css',
})
export class GetUsuario {

  protected readonly getUsuarioService = inject(GetUsuarioService);

  protected recarregarGet(){
    this.getUsuarioService.getUsuarios.reload();
  }
}
