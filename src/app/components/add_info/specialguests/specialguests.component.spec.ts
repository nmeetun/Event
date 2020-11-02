import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialguestsComponent } from './specialguests.component';

describe('SpecialguestsComponent', () => {
  let component: SpecialguestsComponent;
  let fixture: ComponentFixture<SpecialguestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialguestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialguestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
