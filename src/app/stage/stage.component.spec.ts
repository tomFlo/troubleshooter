import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {StageComponent} from './stage.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StepService} from '../step/step.service';
import {Step, Option} from '../step/step.component';
import {ConfigService} from '../core/config.service';

describe('StageComponent', () => {
    let component: StageComponent;
    let fixture: ComponentFixture<StageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StageComponent],
            providers: [StepService, ConfigService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should set step on next step from step service', inject([StepService], (stepService) => {
        const options = [];
        options.push(new Option('Host', 'host-login'));
        options.push(new Option('IPE', 'ipe-login'));
        const step = new Step('choose-app', 'Which Environment would you like to troubleshoot?', options);

        stepService.next(step);

        expect(component.step).toEqual(step);
    }));
});
