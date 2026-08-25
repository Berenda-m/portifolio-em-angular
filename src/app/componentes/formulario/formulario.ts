import { Component, inject, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';
import { FormularioService } from './formulario-service';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css'],
})
export class Formulario {

  protected readonly formularioService = inject(FormularioService)

  produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: ''
  });

  produtoForm = form(this.produtoModel);

  //produtos = signal<Produto[]>([]);//

  cadastrarProduto(event: SubmitEvent) {
    event.preventDefault();
    this.formularioService.cadastrarProduto(this.produtoModel())
    

    const produto = this.produtoModel();

    console.log(produto)

    //this.produtos.update(valor => [...valor, produto])//

    alert('Produto cadastrado');

    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: ''
    })
  }


}