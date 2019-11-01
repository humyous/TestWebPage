import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AudiotestComponent } from './audiotest/audiotest.component';
import { LpTagTestComponent } from './lp-tag-test/lp-tag-test.component';
import { StepUpComponent } from './step-up/step-up.component';

const routes: Routes =[
  {path : 'audiotest', component: AudiotestComponent},
  {path : 'lpTagTest', component: LpTagTestComponent},
  {path : 'stepUp', component : StepUpComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AudiotestComponent,
    LpTagTestComponent,
    StepUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation : 'reload'
    }),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
