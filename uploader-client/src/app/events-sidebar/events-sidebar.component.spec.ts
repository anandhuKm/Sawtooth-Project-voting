import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSidebarComponent } from './events-sidebar.component';

describe('EventsSidebarComponent', () => {
  let component: EventsSidebarComponent;
  let fixture: ComponentFixture<EventsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
