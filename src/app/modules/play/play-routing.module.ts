import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { EnterNamePageComponent } from './pages/enter-name-page/enter-name-page.component';
import { InitialCounterPageComponent } from './pages/initial-counter-page/initial-counter-page.component';
import { TakeQuizPageComponent } from './pages/take-quiz-page/take-quiz-page.component';
import { UserResponseComponent } from '@shared/components/user-response/user-response.component';

const routes: Routes = [
  {
    path: '',
    component: PlayPageComponent
  },
  {
    path: 'join',
    component: EnterNamePageComponent
  },
  {
    path: 'startCounter',
    component: InitialCounterPageComponent
  },
  {
    path: 'takeQuiz',
    component: TakeQuizPageComponent
  },
  {
    path: 'userResponse/:id',
    component: UserResponseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
