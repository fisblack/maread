import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnViewAllComponent } from './btn-view-all.component';

describe('BtnViewAllComponent', () => {
  let component: BtnViewAllComponent;
  let fixture: ComponentFixture<BtnViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
