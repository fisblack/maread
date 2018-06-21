import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNovelComponent } from './make-novel.component';

describe('MakeNovelComponent', () => {
  let component: MakeNovelComponent;
  let fixture: ComponentFixture<MakeNovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeNovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
