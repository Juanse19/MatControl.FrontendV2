import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedFTPComponent } from './received-ftp.component';

describe('ReceivedFTPComponent', () => {
  let component: ReceivedFTPComponent;
  let fixture: ComponentFixture<ReceivedFTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedFTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedFTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
