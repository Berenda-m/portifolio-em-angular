import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostUsuarioInterface } from '../../interfaces/post-usuario-interface';

@Injectable({
  providedIn: 'root',
})
export class PostUsuarioService {

private readonly http= inject(HttpClient)

private urlApi= 'https://jsonplaceholder.typicode.com/users'


cadastrarUsuarioPost(postUsuario: PostUsuarioInterface){
  return this.http.post<PostUsuarioInterface>(this.urlApi, postUsuario);
};

}
