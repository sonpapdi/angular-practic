import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPraComponent } from './header-pra.component';

describe('HeaderPraComponent', () => {
  let component: HeaderPraComponent;
  let fixture: ComponentFixture<HeaderPraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
