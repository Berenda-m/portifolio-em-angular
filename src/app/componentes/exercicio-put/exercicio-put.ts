import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../formulario-exercicios/api-service';
import { PutInterface } from '../../interfaces/put-interface';
import { form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-exercicio-put',
  imports: [FormField],
  templateUrl: './exercicio-put.html',
  styleUrl: './exercicio-put.css',
})
export class ExercicioPut {

  protected readonly ApiService = inject(ApiService);

  protected exercicioPutModel = signal<PutInterface>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  protected exercicioPutForm = form(this.exercicioPutModel, (s) => {
    required(s.id, { message: 'Campo Obrigatório' });
    required(s.userId, { message: 'Campo Obrigatório' });
    required(s.title, { message: 'Campo Obrigatório' });
    required(s.body, { message: 'Campo Obrigatório' });
  });

  protected cadastroUsuario(event: SubmitEvent) {
    event.preventDefault();

    const put = this.exercicioPutModel();

    this.ApiService.cadastrarPostDoService(put).subscribe({
      next: () => {
        alert('Post Cadastrado');
        this.exercicioPutModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });
      },
      error: () => {
        console.log('erro');
        alert('Algo deu errado');
      }
    });
  }
}
