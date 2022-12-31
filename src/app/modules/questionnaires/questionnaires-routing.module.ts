import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CreateQuestionsComponent } from './pages/create-questions/create-questions.component';
import { CreateQuizPageComponent } from './pages/create-quiz-page/create-quiz-page.component';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';
import { ViewQuizComponent } from './pages/view-quiz/view-quiz.component';


const routes: Routes = [
  {
    path: '',
    component: ListQuestionnairesPageComponent
  },
  {
    path: 'createQuiz',
    component: CreateQuizPageComponent
  },
  {
    path: 'createQuestion',
    component: CreateQuestionsComponent
  },
  {
    path: 'viewQuiz/:id',
    component: ViewQuizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }
