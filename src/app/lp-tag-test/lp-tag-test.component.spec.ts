import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpTagTestComponent } from './lp-tag-test.component';

describe('LpTagTestComponent', () => {
  let component: LpTagTestComponent;
  let fixture: ComponentFixture<LpTagTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpTagTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpTagTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
