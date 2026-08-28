import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Formularioapi } from '../../interfaces/formularioapi';
import { ExercicioPut } from '../exercicio-put/exercicio-put';
import { PutInterface } from '../../interfaces/put-interface';
import { DeleteInterface } from '../../interfaces/delete-interface';
import { PostResponse } from '../../interfaces/post-response';
import { PutResponse } from '../../interfaces/put-response';
import { DeleteResponse } from '../../interfaces/delete-response';
import { GetResponse } from '../../interfaces/get-response';

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
  return this.http.put<PutResponse>(`${this.urlApi}/${postAtualizado.id}`, postAtualizado);

 }

deletePost(postAtualizado:DeleteInterface){
  return this.http.delete<DeleteResponse>(`${this.urlApi}/${postAtualizado.id}`)
}

readonly postsDetails = httpResource<GetResponse[]>(
  () => this.urlApi, 
  {defaultValue: []}
);


}
