import { Component, inject, signal, Signal } from '@angular/core';
import { email, form, FormField, required } from "@angular/forms/signals";
import { LoginInterface } from '../../interfaces/login-interface';
import { Alunos } from '../alunos/alunos';
import { LoginService } from './login-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormField, Alunos],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  protected readonly loginService= inject(LoginService)

  protected loginModel = signal<LoginInterface>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {
    required(s.email, { message: 'Email é obrigatório' })
    email(s.email, {message: 'Email invalido'})
    required(s.senha, {message: 'Senha inválida'})
  });


  //protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();

    if (login.email === 'brenda@email.com' && login.senha === 'senha') {
      this.loginService.estaLogado.set(true)
    }
  }
}
