import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketCounterComponent } from './packet-counter.component';

describe('PacketCounterComponent', () => {
  let component: PacketCounterComponent;
  let fixture: ComponentFixture<PacketCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacketCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
