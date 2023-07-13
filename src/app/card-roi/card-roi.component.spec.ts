import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoiComponent } from './card-roi.component';

describe('CardRoiComponent', () => {
  let component: CardRoiComponent;
  let fixture: ComponentFixture<CardRoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRoiComponent]
    });
    fixture = TestBed.createComponent(CardRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
