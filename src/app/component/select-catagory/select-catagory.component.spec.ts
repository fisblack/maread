import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCatagoryComponent } from './select-catagory.component';

describe('SelectCatagoryComponent', () => {
  let component: SelectCatagoryComponent;
  let fixture: ComponentFixture<SelectCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
