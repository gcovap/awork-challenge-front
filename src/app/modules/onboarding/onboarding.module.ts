import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnboardingWrapperComponent } from './components/onboarding-wrapper/onboarding-wrapper.component';

@NgModule({
  imports: [
    NgModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    OnboardingWrapperComponent
  ],
  exports: []
})
export class OnboardingModule { }
