import { Injectable, signal } from '@angular/core';
import { LoginInterface } from '../../interfaces/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

estaLogado = signal<boolean>(false);


}
