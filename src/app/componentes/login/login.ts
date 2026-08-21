import { Component, inject, signal, Signal } from '@angular/core';
import { email, form, FormField, required } from "@angular/forms/signals";
import { LoginInterface } from '../../interfaces/login-interface';
import { Alunos } from '../alunos/alunos';
import { LoginService } from './login-service';
import { FormularioExercicios } from '../formulario-exercicios/formulario-exercicios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormField, Alunos, FormularioExercicios],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  protected readonly loginService = inject(LoginService);

  protected loginModel = signal<LoginInterface>({
    email: '',
    senha: ''
  });

  protected loginForm = form(this.loginModel, (s) => {
    required(s.email, { message: 'Email é obrigatório' })
    email(s.email, { message: 'Email invalido' })
    required(s.senha, { message: 'Senha inválida' })
  });


  protected estaLogado = signal<boolean>(false);

  protected efetuarLogin(event: SubmitEvent) {
    event.preventDefault();

    const login = this.loginModel();
    
    const logou = this.loginService.autenticarUsuario(login);

    if (logou === true) {
      this.estaLogado.set(true);

    }
    else{
      this.estaLogado.set(false);
    }

    this.loginModel.set({
    email: '',
    senha: ''
    });

    /*if (login.email === 'brenda@email.com' && login.senha === 'senha') {
      this.loginService.estaLogado.set(true)
    }*/
  }
}
