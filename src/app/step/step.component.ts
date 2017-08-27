import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {StepService} from './step.service';

export class Option {
  title: string;
  stepId: string;

  constructor(title: string, stepId: string) {
    this.title = title;
    this.stepId = stepId;
  }
}

export class Step {
  id: string;
  title: string;
  description?: string;
  options: Option[];

  constructor(id: string, title: string, options: Option[]) {
    this.id = id;
    this.title = title;
    this.options = options;
  }
}

@Component({
  selector: 'tsh-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements AfterViewInit, OnChanges {
  @ViewChild('linesSvg') linesSvg;

  @Input() step: Step;
  lines: string[];

  constructor(private stepService: StepService) {
  }

  nextStep(stepId: string) {
    this.stepService.nextStep(stepId);
  }

  ngAfterViewInit(): void {
    this.drawLines();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['step']['currentValue'] !== changes['step']['previousValue'] && this.linesSvg) {
      this.drawLines();
    }
  }

  drawLines() {
    this.lines = [];
    const size = this.step.options.length;
    const width = this.linesSvg.nativeElement.clientWidth;
    const startX = width / 2;
    const start = startX + ',60 ' + startX + ',200 ';
    let i = 0;
    for (i; i < size; i++) {
      const endX = width - ((width / (size * 2)) * (i * 2 + 1));
      const end = endX + ',200 ' + endX + ',280 ';
      this.lines.push(start + end);
    }
  }

}
