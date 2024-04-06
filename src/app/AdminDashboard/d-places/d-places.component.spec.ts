import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPlacesComponent } from './d-places.component';

describe('DPlacesComponent', () => {
  let component: DPlacesComponent;
  let fixture: ComponentFixture<DPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
