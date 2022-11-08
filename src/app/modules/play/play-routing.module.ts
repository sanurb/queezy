import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayPageComponent } from './pages/play-page/play-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlayPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
