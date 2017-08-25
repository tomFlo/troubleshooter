import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepComponent} from './step.component';
import {MdCardModule, MdButtonModule, MdGridListModule} from '@angular/material';
import {CoreModule} from '../core/core.module';
import {StepService} from './step.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule
  ],
  exports: [StepComponent],
  declarations: [StepComponent],
  providers: [StepService]
})
export class StepModule {
}
