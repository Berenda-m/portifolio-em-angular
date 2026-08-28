import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostUsuarioService {

private readonly http= inject(HttpClient)

private urlApi= 'https://jsonplaceholder.typicode.com/users'

}
