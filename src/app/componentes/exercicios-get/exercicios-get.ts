import { Component, inject } from '@angular/core';
import { ApiService } from '../formulario-exercicios/api-service';

@Component({
  selector: 'app-exercicios-get',
  imports: [],
  templateUrl: './exercicios-get.html',
  styleUrl: './exercicios-get.css',
})
export class ExerciciosGet {

  protected readonly apiservice= inject(ApiService);

}
