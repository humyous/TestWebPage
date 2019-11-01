import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepUpComponent } from './step-up.component';

describe('StepUpComponent', () => {
  let component: StepUpComponent;
  let fixture: ComponentFixture<StepUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
