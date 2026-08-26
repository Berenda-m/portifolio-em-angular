import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Formularioapi } from '../../interfaces/formularioapi';
import { ExercicioPut } from '../exercicio-put/exercicio-put';
import { PutInterface } from '../../interfaces/put-interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly http= inject(HttpClient)

  private urlApi= 'https://jsonplaceholder.typicode.com/posts'

  readonly fomularioApi= signal<Formularioapi[]>([]);

 cadastrarPostDoService(postCadastrado: Formularioapi){
  return this.http.post<Formularioapi>
  
    (this.urlApi, postCadastrado);
 }


 atualizarPost(postAtualizado: PutInterface){
  return this.http.put<PutInterface>(`${this.urlApi}/${postAtualizado.id}`, postAtualizado);

 }


}
