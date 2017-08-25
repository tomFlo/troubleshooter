import {Injectable} from '@angular/core';
import {ObservableService} from '../core/observable.service';
import {Step} from './step.component';
import {ConfigService} from '../core/config.service';

@Injectable()
export class StepService extends ObservableService<Step> {
  steps: Step[];

  constructor(configService: ConfigService) {
    super();
    this.steps = configService.steps;
  }

  start() {
    this.next(this.steps[0]);
  }

  nextStep(stepId: string) {
    this.next(this.steps.find(s => s.id === stepId));
  }
}
