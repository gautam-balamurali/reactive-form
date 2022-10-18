import { TestBed } from '@angular/core/testing';

import { EmitFormValueService } from './emit-form-value.service';

describe('EmitFormValueService', () => {
  let service: EmitFormValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmitFormValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
