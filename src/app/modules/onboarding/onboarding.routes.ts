import { Routes } from '@angular/router'
import { GenericWrapperComponent } from '../../components/generic-wrapper/generic-wrapper.component'
import { OnboardingWrapperComponent } from './components/onboarding-wrapper/onboarding-wrapper.component'

const routes: Routes = [
  {
    path: '',
    component: GenericWrapperComponent,
    children: [{
      path: '',
      component: OnboardingWrapperComponent
    }]
  }
]

export default routes
