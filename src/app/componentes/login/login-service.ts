import { Injectable, signal } from '@angular/core';
import { LoginInterface } from '../../interfaces/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

autenticarUsuario(credenciais: LoginInterface){
  if (credenciais.email === 'brenda@email.com' && credenciais.senha === 'senha') {
     return true;
    }
else{
  return false;
}
}


}
