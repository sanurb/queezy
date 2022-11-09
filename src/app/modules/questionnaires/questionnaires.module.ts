import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnairesRoutingModule } from './questionnaires-routing.module';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';
import { CreateQuizPageComponent } from './pages/create-quiz-page/create-quiz-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListQuestionnairesPageComponent,
    CreateQuizPageComponent
  ],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class QuestionnairesModule { }
