import {Component, OnInit} from '@angular/core';
import {Step} from '../step/step.component';
import {StepService} from '../step/step.service';

@Component({
  selector: 'tsh-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  step: Step;

  constructor(private stepService: StepService) {
    this.stepService.subscribe((step: Step) => this.step = step);
  }

  ngOnInit(): void {
    this.stepService.start();
  }
}
