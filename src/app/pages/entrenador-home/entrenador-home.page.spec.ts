import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenadorHomePage } from './entrenador-home.page';

describe('EntrenadorHomePage', () => {
  let component: EntrenadorHomePage;
  let fixture: ComponentFixture<EntrenadorHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
