import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnairesPageComponent } from './pages/list-questionnaires-page/list-questionnaires-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListQuestionnairesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesRoutingModule { }
