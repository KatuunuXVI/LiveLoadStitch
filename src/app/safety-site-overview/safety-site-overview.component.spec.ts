import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetySiteOverviewComponent } from './safety-site-overview.component';

describe('SafetySiteOverviewComponent', () => {
  let component: SafetySiteOverviewComponent;
  let fixture: ComponentFixture<SafetySiteOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetySiteOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetySiteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
