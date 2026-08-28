import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsuario } from './post-usuario';

describe('PostUsuario', () => {
  let component: PostUsuario;
  let fixture: ComponentFixture<PostUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(PostUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
