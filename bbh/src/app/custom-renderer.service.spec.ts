import { TestBed, inject } from '@angular/core/testing';

import { CustomRendererService } from './custom-renderer.service';

describe('CustomRendererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomRendererService]
    });
  });

  it('should be created', inject([CustomRendererService], (service: CustomRendererService) => {
    expect(service).toBeTruthy();
  }));
});
