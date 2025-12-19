import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PackAlumnoPage } from './pack-alumno.page';

describe('PackAlumnoPage', () => {
  let component: PackAlumnoPage;
  let fixture: ComponentFixture<PackAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PackAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
