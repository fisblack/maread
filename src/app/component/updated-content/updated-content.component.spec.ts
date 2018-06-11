import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedContentComponent } from './updated-content.component';

describe('UpdatedContentComponent', () => {
  let component: UpdatedContentComponent;
  let fixture: ComponentFixture<UpdatedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
