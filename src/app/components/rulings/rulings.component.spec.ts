import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingsComponent } from './rulings.component';

describe('RulingsComponent', () => {
  let component: RulingsComponent;
  let fixture: ComponentFixture<RulingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulingsComponent ], schemas: [NO_ERRORS_SCHEMA], imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
