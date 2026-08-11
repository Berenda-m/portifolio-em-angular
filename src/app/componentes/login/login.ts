import { Component, signal, Signal } from '@angular/core';
import { email, form, FormField, required } from "@angular/forms/signals";
import { LoginInterface } from '../../interfaces/login-interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormField],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  protected loginModel = signal<LoginInterface>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {
    required(s.email, { message: 'Email é obrigatório' })
    email(s.email, {message: 'Email invalido'})
    required(s.senha, {message: 'Senha inválida'})
  });


  protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    if (login.email === 'brenda@email.com' && login.senha === 'senha') {
      this.estaLogado.set(true)
    }
  }
}
