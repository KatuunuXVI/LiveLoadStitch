import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkrendererComponent } from './linkrenderer.component';

describe('LinkrendererComponent', () => {
  let component: LinkrendererComponent;
  let fixture: ComponentFixture<LinkrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
