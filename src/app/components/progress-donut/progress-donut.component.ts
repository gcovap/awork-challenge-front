import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'progress-donut',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './progress-donut.component.html',
  styleUrls: ['./progress-donut.component.scss'],
  animations: [
    trigger('progressAnimation', [
      transition(':increment', [
        animate('500ms ease-out', style({ transform: 'scale(1.05)' })),
        animate('100ms ease-in', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ProgressDonutComponent implements OnInit {
  @Input() chartData: any[] = [];
  @Input() progress = 0;
  view: [number, number ] = [500, 400];
  colorScheme: Color = {
    name: 'name',
    group: ScaleType.Linear,
    selectable: false,
    domain: ['#4CAF50', '#E0E0E0'],
  };

  constructor() {}
  ngOnInit() { }
  customTooltip({ data }: { data: any }): string {
    return `${data.name}: ${data.value}%`;
  }
}
