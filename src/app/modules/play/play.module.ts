import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { EnterNamePageComponent } from './pages/enter-name-page/enter-name-page.component';
import { InitialCounterPageComponent } from './pages/initial-counter-page/initial-counter-page.component';
import { TakeQuizPageComponent } from './pages/take-quiz-page/take-quiz-page.component';


@NgModule({
  declarations: [
    PlayPageComponent,
    EnterNamePageComponent,
    InitialCounterPageComponent,
    TakeQuizPageComponent,
  ],
  imports: [
    CommonModule,
    PlayRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PlayModule { }
