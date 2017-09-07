import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObservableService} from './observable.service';
import {ConfigService} from './config.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ObservableService, ConfigService],
    declarations: []
})
export class CoreModule {
}
