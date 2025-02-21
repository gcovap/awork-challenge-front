import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingWrapperComponent } from './onboarding-wrapper.component';

describe('ChecklistComponent', () => {
  let component: OnboardingWrapperComponent;
  let fixture: ComponentFixture<OnboardingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
