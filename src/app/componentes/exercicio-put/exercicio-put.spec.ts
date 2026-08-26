import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioPut } from './exercicio-put';

describe('ExercicioPut', () => {
  let component: ExercicioPut;
  let fixture: ComponentFixture<ExercicioPut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioPut],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioPut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
