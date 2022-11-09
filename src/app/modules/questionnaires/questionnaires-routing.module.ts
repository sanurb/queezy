import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CreateQuestionsComponent } from './pages/create-questions/create-questions.component';
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
  },
  {
    path: 'create-question',
    component: CreateQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }
