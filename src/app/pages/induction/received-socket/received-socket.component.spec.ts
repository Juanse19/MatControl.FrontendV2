import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedSocketComponent } from './received-socket.component';

describe('ReceivedSocketComponent', () => {
  let component: ReceivedSocketComponent;
  let fixture: ComponentFixture<ReceivedSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
