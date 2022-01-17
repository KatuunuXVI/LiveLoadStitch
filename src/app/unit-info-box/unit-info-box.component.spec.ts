import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitInfoBoxComponent } from './unit-info-box.component';

describe('UnitInfoBoxComponent', () => {
  let component: UnitInfoBoxComponent;
  let fixture: ComponentFixture<UnitInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
