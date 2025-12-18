import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenadorPacksPage } from './entrenador-packs.page';

describe('EntrenadorPacksPage', () => {
  let component: EntrenadorPacksPage;
  let fixture: ComponentFixture<EntrenadorPacksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorPacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
