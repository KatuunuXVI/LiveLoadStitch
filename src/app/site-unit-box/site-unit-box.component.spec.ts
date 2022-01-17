import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUnitBoxComponent } from './site-unit-box.component';

describe('SiteUnitBoxComponent', () => {
  let component: SiteUnitBoxComponent;
  let fixture: ComponentFixture<SiteUnitBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteUnitBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUnitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
