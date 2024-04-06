import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBookingComponent } from './d-booking.component';

describe('DBookingComponent', () => {
  let component: DBookingComponent;
  let fixture: ComponentFixture<DBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
