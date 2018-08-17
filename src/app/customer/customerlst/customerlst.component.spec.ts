import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerlstComponent } from './customerlst.component';

describe('CustomerlstComponent', () => {
  let component: CustomerlstComponent;
  let fixture: ComponentFixture<CustomerlstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerlstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
