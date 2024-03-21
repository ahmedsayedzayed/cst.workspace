import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.scss']
})
export class CircularProgressBarComponent {
    @Input() totalSize:number;
    @Input() fillSize:number;
    @Input() progress:number;
    @Input() innerColor:string;
    @Input() outerColor:string;
    @Input() progressColor:string;
}
