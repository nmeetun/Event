import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPrivateComponent } from './public-private.component';

describe('PublicPrivateComponent', () => {
  let component: PublicPrivateComponent;
  let fixture: ComponentFixture<PublicPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
