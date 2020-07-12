import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverNavComponent } from './cover-nav.component';

describe('CoverNavComponent', () => {
  let component: CoverNavComponent;
  let fixture: ComponentFixture<CoverNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
