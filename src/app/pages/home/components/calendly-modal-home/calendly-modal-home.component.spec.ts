import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendlyModalHomeComponent } from './calendly-modal-home.component';

describe('CalendlyModalHomeComponent', () => {
  let component: CalendlyModalHomeComponent;
  let fixture: ComponentFixture<CalendlyModalHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendlyModalHomeComponent]
    });
    fixture = TestBed.createComponent(CalendlyModalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
