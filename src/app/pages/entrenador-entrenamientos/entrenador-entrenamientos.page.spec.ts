import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenadorEntrenamientosPage } from './entrenador-entrenamientos.page';

describe('EntrenadorEntrenamientosPage', () => {
  let component: EntrenadorEntrenamientosPage;
  let fixture: ComponentFixture<EntrenadorEntrenamientosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorEntrenamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
