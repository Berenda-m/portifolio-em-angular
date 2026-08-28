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

  protected cadastrarUsuario(event: SubmitEvent){
    event.preventDefault();
    const post= this.postUsuarioModel();

  this.postUsuarioService.cadastrarUsuarioPost(post).subscribe({
    next: () =>{
      alert('Post cadastrado')

      this.postUsuarioModel.set({
        name: '',
        username:'',
        email:'',
        phone: null
      });
      this.postUsuarioForm().reset();
    },

    error: ()=>{
      alert('Algo deu errado')
    }
  })

  }

}
