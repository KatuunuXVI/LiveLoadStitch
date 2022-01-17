import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyComponent } from './safety.component';

describe('CostsComponent', () => {
  let component: SafetyComponent;
  let fixture: ComponentFixture<SafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
