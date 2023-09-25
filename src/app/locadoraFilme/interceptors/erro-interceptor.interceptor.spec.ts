import { TestBed } from '@angular/core/testing';

import { ErroInterceptorInterceptor } from './erro-interceptor.interceptor';

describe('ErroInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErroInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErroInterceptorInterceptor = TestBed.inject(ErroInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
