import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtitleComponent } from './eventtitle.component';

describe('EventtitleComponent', () => {
  let component: EventtitleComponent;
  let fixture: ComponentFixture<EventtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
