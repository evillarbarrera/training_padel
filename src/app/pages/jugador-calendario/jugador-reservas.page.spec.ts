import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadorReservasPage } from './jugador-reservas.page';

describe('JugadorReservasPage', () => {
  let component: JugadorReservasPage;
  let fixture: ComponentFixture<JugadorReservasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
