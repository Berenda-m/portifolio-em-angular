import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'],
})
export class Formulario {

  produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: null
  });

  produtoForm = form(this.produtoModel);
}