import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DManagusersComponent } from './d-managusers.component';

describe('DManagusersComponent', () => {
  let component: DManagusersComponent;
  let fixture: ComponentFixture<DManagusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DManagusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DManagusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
