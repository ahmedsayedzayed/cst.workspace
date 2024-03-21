import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar-svg',
  templateUrl: './circular-progress-bar-svg.component.html',
  styleUrls: ['./circular-progress-bar-svg.component.scss']
})
export class CircularProgressBarSvgComponent {

  @Input() totalSize: number;
  @Input() strokeWidth: number;
  @Input() progress: number;
  @Input() outerColor: string;
  @Input() progressColor: string;
  @Input() isStrokLineCapRound: boolean = false;

}
