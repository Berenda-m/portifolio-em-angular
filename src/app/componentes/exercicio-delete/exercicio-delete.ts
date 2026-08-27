import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../formulario-exercicios/api-service';
import { DeleteInterface } from '../../interfaces/delete-interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-exercicio-delete',
  imports: [FormField],
  templateUrl: './exercicio-delete.html',
  styleUrl: './exercicio-delete.css',
})
export class ExercicioDelete {
  protected readonly ApiService = inject(ApiService);

  protected exercicioDeleteModel= signal<DeleteInterface>({

    id: null
  });

  protected readonly deleteForm= form(this.exercicioDeleteModel)

  deletePost(event: SubmitEvent){
    event.preventDefault();

    this.ApiService.deletePost(this.exercicioDeleteModel()).subscribe({
      next: (response) =>{
        alert('Cadastro deletado ');
        this.exercicioDeleteModel.set({
          id: null
        });
      }
    });
  }

  
}

