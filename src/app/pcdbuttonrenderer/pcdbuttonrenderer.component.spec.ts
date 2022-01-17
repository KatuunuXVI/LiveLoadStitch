import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdbuttonrendererComponent } from './pcdbuttonrenderer.component';

describe('PcdbuttonrendererComponent', () => {
  let component: PcdbuttonrendererComponent;
  let fixture: ComponentFixture<PcdbuttonrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcdbuttonrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdbuttonrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
