import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankNavbarComponent } from './blank-navbar.component';

describe('BlankNavbarComponent', () => {
  let component: BlankNavbarComponent;
  let fixture: ComponentFixture<BlankNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankNavbarComponent]
    });
    fixture = TestBed.createComponent(BlankNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
