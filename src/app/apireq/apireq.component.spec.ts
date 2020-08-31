import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApireqComponent } from './apireq.component';

describe('ApireqComponent', () => {
  let component: ApireqComponent;
  let fixture: ComponentFixture<ApireqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApireqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApireqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
