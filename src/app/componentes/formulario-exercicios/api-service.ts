import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Formularioapi } from '../../interfaces/formularioapi';
import { ExercicioPut } from '../exercicio-put/exercicio-put';
import { PutInterface } from '../../interfaces/put-interface';
import { DeleteInterface } from '../../interfaces/delete-interface';
import { PostResponse } from '../../interfaces/post-response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly http= inject(HttpClient)

  private urlApi= 'https://jsonplaceholder.typicode.com/posts'

  readonly fomularioApi= signal<Formularioapi[]>([]);

 cadastrarPostDoService(postCadastrado: Formularioapi){
  return this.http.post<PostResponse>(this.urlApi, postCadastrado);
 }


 atualizarPost(postAtualizado: PutInterface){
  return this.http.put<PutInterface>(`${this.urlApi}/${postAtualizado.id}`, postAtualizado);

 }

deletePost(postAtualizado:DeleteInterface){
  return this.http.delete<DeleteInterface>(`${this.urlApi}/${postAtualizado.id}`)
}
}
