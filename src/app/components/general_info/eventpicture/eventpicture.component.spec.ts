import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpictureComponent } from './eventpicture.component';

describe('EventpictureComponent', () => {
  let component: EventpictureComponent;
  let fixture: ComponentFixture<EventpictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventpictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
