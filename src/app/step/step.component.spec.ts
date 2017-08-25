import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Step, StepComponent} from './step.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StepService} from './step.service';
import {ConfigService} from '../core/config.service';

describe('StepComponent', () => {
  let component: StepComponent;
  let fixture: ComponentFixture<StepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepComponent],
      providers: [StepService, ConfigService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepComponent);
    component = fixture.componentInstance;
    const options = [];
    options.push(new Option('Host', 'host-login'));
    options.push(new Option('IPE', 'ipe-login'));
    component.step = new Step('choose-app', 'Which Environment would you like to troubleshoot?', options);
    component.lines = [];
    component.linesSvg = null;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
