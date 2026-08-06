import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
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