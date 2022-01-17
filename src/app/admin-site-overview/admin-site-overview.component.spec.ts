import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSiteOverviewComponent } from './admin-site-overview.component';

describe('AdminSiteOverviewComponent', () => {
  let component: AdminSiteOverviewComponent;
  let fixture: ComponentFixture<AdminSiteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSiteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSiteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
