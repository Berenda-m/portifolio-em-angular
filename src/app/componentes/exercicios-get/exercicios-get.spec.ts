import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosGet } from './exercicios-get';

describe('ExerciciosGet', () => {
  let component: ExerciciosGet;
  let fixture: ComponentFixture<ExerciciosGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciosGet],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciosGet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
