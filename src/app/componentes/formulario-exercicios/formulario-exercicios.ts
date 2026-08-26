import { Component, inject, signal } from '@angular/core';
import { form, FormField, required } from "@angular/forms/signals";
import { FormularioService } from '../formulario/formulario-service';
import { Formularioapi } from '../../interfaces/formularioapi';
import { ApiService } from './api-service';

@Component({
  selector: 'app-formulario-exercicios',
  templateUrl: './formulario-exercicios.html',
  styleUrl: './formulario-exercicios.css',
  imports: [FormField]
})
export class FormularioExercicios {


  protected readonly apiservice= inject(ApiService)

  protected fomularioExerciciosModel = signal<Formularioapi>({
    userId: null,
    title:'',
    body:''
  })


  protected formularioForm = form(this.fomularioExerciciosModel, (s) =>{
  required(s.userId, {message: 'Campo Obrigatório'})
  required(s.title, {message: 'Campo Obrigatório'})
  required(s.body,{message:'Campo Obrigatório'})


})
protected cadastroUsuario(event: SubmitEvent){
  event.preventDefault();
  const post= this.fomularioExerciciosModel();

  this.apiservice.cadastrarPostDoService(post).subscribe({
    next: (response) =>{
      alert('Post Cadastrado com id:' + response.id )
      this.fomularioExerciciosModel.set({
        userId: null,
        title:'',
        body:'' 
      });
      this.formularioForm().reset();
    }, 
    error: () => {
      console.log('erro')
      alert('Algo deu errado')
    }
  })

}

}

