import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HorarioModalComponent } from './horario-modal.component';

describe('HorarioModalComponent', () => {
  let component: HorarioModalComponent;
  let fixture: ComponentFixture<HorarioModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HorarioModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HorarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
