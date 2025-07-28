import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerPrivacyPolicy } from './disclaimer-privacy-policy';

describe('DisclaimerPrivacyPolicy', () => {
  let component: DisclaimerPrivacyPolicy;
  let fixture: ComponentFixture<DisclaimerPrivacyPolicy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerPrivacyPolicy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclaimerPrivacyPolicy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
