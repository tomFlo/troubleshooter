import {TestBed, inject} from '@angular/core/testing';

import {StepService} from './step.service';
import {ConfigService} from '../core/config.service';
import createSpy = jasmine.createSpy;

describe('StepService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StepService,
                ConfigService
            ]
        });
    });

    it('should be created', inject([StepService], (service: StepService) => {
        expect(service).toBeTruthy();
    }));

    it('should save steps from configuration',
        inject([StepService, ConfigService], (stepService: StepService, configService: ConfigService) => {
            expect(stepService.steps).toEqual(configService.steps);
        }));

    it('should be called on next step',
        inject([StepService], (stepService: StepService) => {
            const spy = createSpy('callback');
            stepService.subscribe(spy);
            const stepId = 'step1';
            stepService.nextStep(stepId);

            expect(spy).toHaveBeenCalledWith(stepService.steps.find(s => s.id === stepId));
        }));
});
