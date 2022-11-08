import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnairesRoutingModule } from './questionnaires-routing.module';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';


@NgModule({
  declarations: [
    ListQuestionnairesPageComponent
  ],
  imports: [
    CommonModule,
    QuestionnairesRoutingModule
  ]
})
export class QuestionnairesModule { }
