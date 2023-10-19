import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrucelHomeComponent } from './carrucel-home.component';

describe('CarrucelHomeComponent', () => {
  let component: CarrucelHomeComponent;
  let fixture: ComponentFixture<CarrucelHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrucelHomeComponent]
    });
    fixture = TestBed.createComponent(CarrucelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
