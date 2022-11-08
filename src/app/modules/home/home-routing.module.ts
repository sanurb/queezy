import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questionnaires',
    loadChildren: () => import('@modules/questionnaires/questionnaires.module').then(m => m.QuestionnairesModule),
  },
  {
    path: '**', // TODO: 404 Cuando no existe la ruta
    redirectTo: '/questionnaires'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
