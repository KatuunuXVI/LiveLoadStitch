import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcddisplayComponent } from './pcddisplay.component';

describe('PcddisplayComponent', () => {
  let component: PcddisplayComponent;
  let fixture: ComponentFixture<PcddisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcddisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcddisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
