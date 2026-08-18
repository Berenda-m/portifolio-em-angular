import { Injectable, signal } from '@angular/core';
import { Aluno } from '../../interfaces/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {

alunos= signal<Aluno[]>([])

cadastrarAluno(aluno: Aluno){
  this.alunos.update(lista => [...lista, aluno]);
}


}
