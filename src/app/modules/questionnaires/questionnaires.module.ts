import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnairesRoutingModule } from './questionnaires-routing.module';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';
import { CreateQuizPageComponent } from './pages/create-quiz-page/create-quiz-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateQuestionsComponent } from './pages/create-questions/create-questions.component';
import { ListQuestionsComponent } from './pages/list-questions/list-questions.component';


@NgModule({
  declarations: [
    ListQuestionnairesPageComponent,
    CreateQuizPageComponent,
    CreateQuestionsComponent,
    ListQuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QuestionnairesModule { }
