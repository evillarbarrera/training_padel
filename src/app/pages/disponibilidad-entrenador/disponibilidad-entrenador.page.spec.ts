import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadEntrenadorPage } from './disponibilidad-entrenador.page';

describe('DisponibilidadEntrenadorPage', () => {
  let component: DisponibilidadEntrenadorPage;
  let fixture: ComponentFixture<DisponibilidadEntrenadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadEntrenadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
