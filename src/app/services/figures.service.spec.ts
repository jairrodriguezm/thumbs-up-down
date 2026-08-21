import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';

import { FiguresService } from './figures.service';

describe('FiguresService', () => {
  let service: FiguresService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(FiguresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
