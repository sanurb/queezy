import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizPageComponent } from './pages/create-quiz-page/create-quiz-page.component';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListQuestionnairesPageComponent
  },
  {
    path: 'create-quiz',
    component: CreateQuizPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }
