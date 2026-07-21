import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ExemploSignal } from '../exemplo-signal/exemplo-signal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ExemploSignal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
