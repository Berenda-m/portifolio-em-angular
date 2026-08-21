import { Component, signal } from '@angular/core';
import { FormularioExercicios as IFormularioExercicios } from '../../interfaces/formulario-exercicios';
import { form, FormField, required } from "@angular/forms/signals";

@Component({
  selector: 'app-formulario-exercicios',
  templateUrl: './formulario-exercicios.html',
  styleUrl: './formulario-exercicios.css',
  imports: [FormField],
})
export class FormularioExercicios {
  protected fomularioExerciciosModel = signal<IFormularioExercicios>({
    userId: 0,
    title: '',
    body: '',
  });


  protected formularioForm = form(this.fomularioExerciciosModel, (s) =>{
  required(s.userId, {message: 'Campo Obrigatório'})
  required(s.title, {message: 'Campo Obrigatório'})
  required(s.body,{message:'Campo Obrigatório'})


})
}
