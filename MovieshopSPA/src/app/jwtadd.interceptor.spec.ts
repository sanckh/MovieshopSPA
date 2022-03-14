import { TestBed } from '@angular/core/testing';

import { JWTAddInterceptor } from './jwtadd.interceptor';

describe('JWTAddInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JWTAddInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JWTAddInterceptor = TestBed.inject(JWTAddInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
