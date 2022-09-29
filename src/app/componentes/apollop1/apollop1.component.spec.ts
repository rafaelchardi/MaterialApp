import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apollop1Component } from './apollop1.component';

describe('Apollop1Component', () => {
  let component: Apollop1Component;
  let fixture: ComponentFixture<Apollop1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Apollop1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Apollop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
