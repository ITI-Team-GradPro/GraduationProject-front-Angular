import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAddAdminsComponent } from './d-add-admins.component';

describe('DAddAdminsComponent', () => {
  let component: DAddAdminsComponent;
  let fixture: ComponentFixture<DAddAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DAddAdminsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DAddAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
