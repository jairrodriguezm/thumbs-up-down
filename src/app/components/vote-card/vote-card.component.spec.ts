import { PercentagePipe } from "../../shared/pipes/percentage.pipe";
import { TimePipe } from "../../shared/pipes/time.pipe";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCardComponent } from './vote-card.component';

describe('VoteCardComponent', () => {
  let component: VoteCardComponent;
  let fixture: ComponentFixture<VoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteCardComponent, PercentagePipe, TimePipe ], schemas: [NO_ERRORS_SCHEMA], imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
