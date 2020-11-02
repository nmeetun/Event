import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberofpeopleComponent } from './numberofpeople.component';

describe('NumberofpeopleComponent', () => {
  let component: NumberofpeopleComponent;
  let fixture: ComponentFixture<NumberofpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberofpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberofpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
