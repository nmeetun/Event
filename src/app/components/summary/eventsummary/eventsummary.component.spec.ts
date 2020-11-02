import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsummaryComponent } from './eventsummary.component';

describe('EventsummaryComponent', () => {
  let component: EventsummaryComponent;
  let fixture: ComponentFixture<EventsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
