import { TestBed } from '@angular/core/testing';

import { MyworkersService } from './myworkers.service';

describe('MyworkersService', () => {
  let service: MyworkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyworkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
