import { TestBed } from '@angular/core/testing';

import { MyPlaceService } from './my-place.service';

describe('MyPlaceService', () => {
  let service: MyPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
