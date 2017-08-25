import {Injectable} from '@angular/core';
import {Step} from '../step/step.component';


function createSteps() {
  return [
    {
      id: 'step1',
      title: 'Do you have first problem?',
      options: [
        {
          title: 'Yes',
          stepId: 'step2'
        },
        {
          title: 'No',
          stepId: 'step3'
        }
      ]
    },
    {
      id: 'step2',
      title: 'Do you have second problem?',
      options: [
        {
          title: 'Yes',
          stepId: 'step3'
        },
        {
          title: 'No',
          stepId: 'step4'
        },
        {
          title: 'Restart',
          stepId: 'step1'
        }
      ]
    },
    {
      id: 'step3',
      title: 'Do you have third problem?',
      options: [
        {
          title: 'Yes',
          stepId: 'step2'
        },
        {
          title: 'No',
          stepId: 'step4'
        },
        {
          title: 'Yes',
          stepId: 'step2'
        },
        {
          title: 'No',
          stepId: 'step4'
        }
      ]
    },
    {
      id: 'step4',
      title: 'No problems!',
      options: [{
        title: 'Restart',
        stepId: 'step1'
      }]
    }
  ];
}

@Injectable()
export class ConfigService {

  steps: Step[] = createSteps();

}
