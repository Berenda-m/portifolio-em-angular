import { Component, signal } from '@angular/core';
import { form, required, FormField } from '@angular/forms/signals';
import { Aluno } from '../../interfaces/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.html',
  styleUrls: ['./alunos.css'],
  imports: [FormField],
  
})
export class Alunos {

  protected alunoModel = signal<Aluno>(
    {
    nome: '',
    media: ''
  })

  protected alunos= signal<Aluno[]>([])

  protected alunoForm = form(this.alunoModel, (s) => {
    required(s.nome,{message: 'nome é obrigatório'});
    required(s.media, {message: 'nota inválida'})
  })

  protected cadastrarAluno() {
    this.alunos.update(lista => [...lista, this.alunoModel()]);
  }
}
