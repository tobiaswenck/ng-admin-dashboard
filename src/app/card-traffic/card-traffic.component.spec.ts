import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrafficComponent } from './card-traffic.component';

describe('CardTrafficComponent', () => {
  let component: CardTrafficComponent;
  let fixture: ComponentFixture<CardTrafficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTrafficComponent]
    });
    fixture = TestBed.createComponent(CardTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
