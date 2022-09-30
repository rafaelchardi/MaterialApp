import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjscomComponent } from './rxjscom.component';

describe('RxjscomComponent', () => {
  let component: RxjscomComponent;
  let fixture: ComponentFixture<RxjscomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjscomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjscomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
