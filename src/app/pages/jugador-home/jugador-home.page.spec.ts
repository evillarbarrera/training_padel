import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugadorHomePage } from './jugador-home.page';

describe('JugadorHomePage', () => {
  let component: JugadorHomePage;
  let fixture: ComponentFixture<JugadorHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
