import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DManageadminsComponent } from './d-manageadmins.component';

describe('DManageadminsComponent', () => {
  let component: DManageadminsComponent;
  let fixture: ComponentFixture<DManageadminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DManageadminsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DManageadminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
