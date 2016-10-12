import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list.component';

import { LightMinutesPipe } from './light-minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,

    LightMinutesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
