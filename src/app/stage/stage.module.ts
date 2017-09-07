import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StageComponent} from './stage.component';
import {StepModule} from '../step/step.module';

@NgModule({
    imports: [
        CommonModule,
        StepModule
    ],
    exports: [StageComponent],
    declarations: [StageComponent]
})
export class StageModule {
}
