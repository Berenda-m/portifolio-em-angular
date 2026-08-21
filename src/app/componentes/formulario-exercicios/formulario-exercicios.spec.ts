import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExercicios } from './formulario-exercicios';

describe('FormularioExercicios', () => {
  let component: FormularioExercicios;
  let fixture: ComponentFixture<FormularioExercicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioExercicios],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioExercicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
