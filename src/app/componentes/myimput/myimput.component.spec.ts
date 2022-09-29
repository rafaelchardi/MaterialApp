import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyimputComponent } from './myimput.component';

describe('MyimputComponent', () => {
  let component: MyimputComponent;
  let fixture: ComponentFixture<MyimputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyimputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyimputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
