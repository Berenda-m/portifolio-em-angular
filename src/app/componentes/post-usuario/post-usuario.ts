import { Component, inject, signal } from '@angular/core';
import { PostUsuarioService } from './post-usuario-service';
import { PostUsuarioInterface } from '../../interfaces/post-usuario-interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-post-usuario',
  imports: [FormField],
  templateUrl: './post-usuario.html',
  styleUrl: './post-usuario.css',
})
export class PostUsuario {

  protected readonly postUsuarioService = inject(PostUsuarioService);

  protected postUsuarioModel = signal<PostUsuarioInterface>(
    {
       name: '',
       username: '',
       email: '',
       phone: null
    }
  );

  protected postUsuarioForm= form(this.postUsuarioModel);


  
}
