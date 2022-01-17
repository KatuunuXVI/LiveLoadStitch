import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleboxComponent } from './titlebox.component';

describe('TitleboxComponent', () => {
  let component: TitleboxComponent;
  let fixture: ComponentFixture<TitleboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
