import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'onboarding',
        loadChildren: () => import('./modules/onboarding/onboarding.routes'),
      },
    ],
  },
];
