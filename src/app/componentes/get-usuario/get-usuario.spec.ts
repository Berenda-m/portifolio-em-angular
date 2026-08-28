import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsuario } from './get-usuario';

describe('GetUsuario', () => {
  let component: GetUsuario;
  let fixture: ComponentFixture<GetUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(GetUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
