import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustrateComponent } from './custrate.component';

describe('CustrateComponent', () => {
  let component: CustrateComponent;
  let fixture: ComponentFixture<CustrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
