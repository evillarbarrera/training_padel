import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadorProgresoPage } from './jugador-progreso.page';

describe('JugadorProgresoPage', () => {
  let component: JugadorProgresoPage;
  let fixture: ComponentFixture<JugadorProgresoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorProgresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
