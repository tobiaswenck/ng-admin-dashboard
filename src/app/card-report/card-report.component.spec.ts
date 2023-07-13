import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReportComponent } from './card-report.component';

describe('CardReportComponent', () => {
  let component: CardReportComponent;
  let fixture: ComponentFixture<CardReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardReportComponent]
    });
    fixture = TestBed.createComponent(CardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
