import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFooterComponent } from './pro-footer.component';

describe('ProFooterComponent', () => {
  let component: ProFooterComponent;
  let fixture: ComponentFixture<ProFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
