import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRoutingComponent } from './container-routing.component';

describe('ContainerRoutingComponent', () => {
  let component: ContainerRoutingComponent;
  let fixture: ComponentFixture<ContainerRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
