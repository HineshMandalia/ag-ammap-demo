import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgAmmap3Component } from './ag-ammap3.component';

describe('AgAmmap3Component', () => {
  let component: AgAmmap3Component;
  let fixture: ComponentFixture<AgAmmap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgAmmap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgAmmap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
