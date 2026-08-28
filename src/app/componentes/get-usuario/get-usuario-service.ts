import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUsuarioInterface } from '../../interfaces/get-usuario-interface';

@Injectable({
  providedIn: 'root',
})
export class GetUsuarioService {

  

  private urlApi = 'https://jsonplaceholder.typicode.com/users'

  readonly getUsuarios = httpResource<GetUsuarioInterface[]>(() => this.urlApi,
{defaultValue:[]});

}
