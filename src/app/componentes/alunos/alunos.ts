import { Component, inject, signal } from '@angular/core';
import { form, required, FormField } from '@angular/forms/signals';
import { Aluno } from '../../interfaces/aluno';
import { AlunosService } from './alunos-service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.html',
  styleUrls: ['./alunos.css'],
  imports: [FormField],
  
})
export class Alunos {

  protected readonly alunosService = inject(AlunosService);

  protected alunoModel = signal<Aluno>(
    {
    nome: '',
    media: 0
  })

  //protected alunos= signal<Aluno[]>([])//

  protected alunoForm = form(this.alunoModel, (s) => {
    required(s.nome,{message: 'nome é obrigatório'});
    required(s.media, {message: 'nota inválida'})
  })

  protected cadastrarAluno(event: SubmitEvent) {
    event.preventDefault()
    this.alunosService.cadastrarAluno(this.alunoModel());
    this.alunoForm().reset({
      nome: '',
      media: 0
    });
  }
}
