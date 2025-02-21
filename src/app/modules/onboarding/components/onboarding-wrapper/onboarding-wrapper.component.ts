import { Component, OnInit, Renderer2 } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ProgressDonutComponent } from '../../../../components/progress-donut/progress-donut.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { OnboardingService, Steps } from '../../../../services/onboarding.service';


@Component({
  selector: 'app-onboarding-component',
  standalone: true,
  imports: [
    CommonModule,
    ProgressDonutComponent,
    MatCheckbox
  ],
  templateUrl: './onboarding-wrapper.component.html',
  styleUrls: ['./onboarding-wrapper.component.scss'],
  animations: [
    trigger('freddyState', [
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden => visible', [

        animate('900ms ease-out')
      ])
    ])
  ]
})
export class OnboardingWrapperComponent implements OnInit {

  constructor (private onboardingService: OnboardingService, private renderer: Renderer2) {}

  checklist: Steps[] = [];
  progress = 0;
  view: [number, number] = [500, 400];
  progressMessage: string = '';
  colorScheme: Color = {
    name: 'name',
    group: ScaleType.Linear,
    selectable: false,
    domain: ['#4CAF50', '#E0E0E0'],
  };
  chartData = [
    { name: 'Completed', value: 0 },
    { name: 'Remaining', value: 100 }
  ];
  freddyVisible = false

  ngOnInit() {
    this.loadSteps()
    this.renderer.listen('document', 'visibilitychange', this.onVisibilityChange);
  }
  loadSteps() {
    this.onboardingService.initUser().subscribe(result => {
      this.checklist = result.steps
      this.progressMessage = result.motivationMessage || ''
      this.updateProgress()
    })
  }
  onVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      this.loadSteps()
    }
  };
  ngOnDestroy() {
    if (this.onVisibilityChange) {
      this.renderer.listen('document', 'visibilitychange', this.onVisibilityChange)();
    }
  }

  customTooltip({ data }: { data: any }): string {
    return `${data.name}: ${data.value}%`;
  }
  toggleItem(index: number) {
    this.checklist[index].completed = !this.checklist[index].completed;
    this.updateProgress();
  }


 async updateProgress() {
    const completed = this.checklist.filter(item => item.completed).length;
    const newProgress = (completed / this.checklist.length) * 100;

    if (newProgress === 100 && this.progress < 100) {
      this.freddyVisible = true
    } else {
      this.freddyVisible = false;
    }

    this.progress = newProgress;
    this.chartData = [
      { name: 'Completed', value: this.progress },
      { name: 'Remaining', value: 100 - this.progress }
    ];

    this.onboardingService.updateProgress(this.checklist).subscribe(result => {
      this.progressMessage = result.motivationMessage || '';
    });
  }

  onFreddyAnimationDone(event: any) {
    if (event.toState === 'visible') {
      confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }
}
