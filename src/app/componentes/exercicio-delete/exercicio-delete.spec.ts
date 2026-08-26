import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDelete } from './exercicio-delete';

describe('ExercicioDelete', () => {
  let component: ExercicioDelete;
  let fixture: ComponentFixture<ExercicioDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
