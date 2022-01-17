import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbuttonrendererComponent } from './editbuttonrenderer.component';

describe('EditbuttonrendererComponent', () => {
  let component: EditbuttonrendererComponent;
  let fixture: ComponentFixture<EditbuttonrendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbuttonrendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbuttonrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
