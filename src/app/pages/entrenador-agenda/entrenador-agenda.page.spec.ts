import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrenadorAgendaPage } from './entrenador-agenda.page';

describe('EntrenadorAgendaPage', () => {
  let component: EntrenadorAgendaPage;
  let fixture: ComponentFixture<EntrenadorAgendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
