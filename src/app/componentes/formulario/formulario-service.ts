import { Injectable, signal } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {

produtos= signal<Produto[]>([])

cadastrarProduto(formulario: Produto){
  this.produtos.update(valor => [...valor, formulario])
}
}
