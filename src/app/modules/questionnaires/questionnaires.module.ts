import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnairesRoutingModule } from './questionnaires-routing.module';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';
import { CreateQuizPageComponent } from './pages/create-quiz-page/create-quiz-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateQuestionsComponent } from './pages/create-questions/create-questions.component';
import { ListQuestionsComponent } from './pages/list-questions/list-questions.component';
import { ViewQuizComponent } from './pages/view-quiz/view-quiz.component';
import { StatsComponent } from './pages/stats/stats.component';


@NgModule({
  declarations: [
    ListQuestionnairesPageComponent,
    CreateQuizPageComponent,
    CreateQuestionsComponent,
    ListQuestionsComponent,
    ViewQuizComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QuestionnairesModule { }
