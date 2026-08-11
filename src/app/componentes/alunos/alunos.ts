import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Aluno } from '../../interfaces/aluno';

@Component({
  selector: 'app-alunos',
  imports: [FormField],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {

protected alunoModel= signal<Aluno>({
  nome: '',
  media:''
})

protected alunoForm = form(this.alunoModel, (s) =>){
required(s.nome {message: 'Insira um nome'})
}

}
