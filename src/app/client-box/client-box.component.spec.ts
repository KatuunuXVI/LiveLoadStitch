import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBoxComponent } from './client-box.component';

describe('ClientBoxComponent', () => {
  let component: ClientBoxComponent;
  let fixture: ComponentFixture<ClientBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
