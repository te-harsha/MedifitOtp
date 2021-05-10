import { TestBed } from '@angular/core/testing';

import { GenerateOtpService } from './generate-otp.service';

describe('GenerateOtpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateOtpService = TestBed.get(GenerateOtpService);
    expect(service).toBeTruthy();
  });
});
