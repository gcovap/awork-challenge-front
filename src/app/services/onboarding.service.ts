import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export type Steps = {
  id: string;
  label: string;
  completed: boolean;
}

export interface UserProgress {
  userId: string;
  steps: Steps[];
  motivationMessage?: string;
}

@Injectable({
  providedIn: 'root',
})
export class OnboardingService extends ApiService {
  private readonly basePath = '/onboarding';

  initUser(): Observable<UserProgress> {
    return this.get<UserProgress>(`${this.basePath}/init`);
  }

  updateProgress(steps: Steps[]): Observable<UserProgress> {
    return this.post<UserProgress>(`${this.basePath}/progress`, { steps });
  }
}
