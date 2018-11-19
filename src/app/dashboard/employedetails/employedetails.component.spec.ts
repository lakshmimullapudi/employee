import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedetailsComponent } from './employedetails.component';

describe('EmployedetailsComponent', () => {
  let component: EmployedetailsComponent;
  let fixture: ComponentFixture<EmployedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
