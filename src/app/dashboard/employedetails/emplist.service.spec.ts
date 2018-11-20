import { TestBed, inject } from '@angular/core/testing';

import { EmplistService } from './emplist.service';

describe('EmplistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmplistService]
    });
  });

  it('should be created', inject([EmplistService], (service: EmplistService) => {
    expect(service).toBeTruthy();
  }));
});
