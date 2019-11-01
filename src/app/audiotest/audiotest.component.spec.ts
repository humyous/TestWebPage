import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiotestComponent } from './audiotest.component';

describe('AudiotestComponent', () => {
  let component: AudiotestComponent;
  let fixture: ComponentFixture<AudiotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
