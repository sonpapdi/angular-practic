import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyaticsComponent } from './analyatics.component';

describe('AnalyaticsComponent', () => {
  let component: AnalyaticsComponent;
  let fixture: ComponentFixture<AnalyaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
