import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumComponent } from './jum.component';

describe('JumComponent', () => {
  let component: JumComponent;
  let fixture: ComponentFixture<JumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
