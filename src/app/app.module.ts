import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MdIconModule, MdGridListModule, MdToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StageModule} from './stage/stage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdGridListModule,
    MdToolbarModule,
    StageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
