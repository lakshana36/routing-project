import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailpdctComponent } from './availpdct.component';

describe('AvailpdctComponent', () => {
  let component: AvailpdctComponent;
  let fixture: ComponentFixture<AvailpdctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailpdctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailpdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
